// Make posts.js from Post files

#include <iostream>
#include <filesystem>
#include <fstream>
#include <string>
#include <vector>
#include <algorithm>

const std::string POSTS_DIR = "./../src/pages/Blog/posts/";
const std::string JSON_PATH = "./../src/pages/Blog/posts.js";
const std::string FIRST_LINE = "export const posts = [";
const std::string JSON_KEY[5] = {"id:", "title:", "headName:", "date:", "content:"};

int skipped_cnt = 0, failed_cnt = 0;

std::vector<bool> id_map(999, false);

struct Post_Data
{
	int id;
	std::string title, headName, date, content;
};

std::string check_char(const std::string &line)
{
	std::string new_line;
	for (auto c : line)
	{
		if (c == '\'')
			new_line += "\\'";
		else
			new_line += c;
	}
	return new_line;
}

bool readPost(const std::string &fileName, const std::string &stem, Post_Data &post)
{
	std::ifstream postFile(fileName);
	if (!postFile.is_open())
	{
		std::cerr << "Error: couldn't open " << fileName << std::endl;
		return false;
	}

	std::string line;
	int line_num = 0;
	post.headName = stem;

	while (std::getline(postFile, line))
	{
		switch (line_num)
		{
		case 0:
			if (line == "no---")
			{
				skipped_cnt++;
				return false;
			}
			break;

		case 1:
		{
			int id = 0;
			try
			{
				id = std::stoi(line);
			}
			catch (...)
			{
				std::cerr << "Invalid ID (not number): " << stem << std::endl;
				failed_cnt++;
				return false;
			}
			if (id < 0 || id >= (int)id_map.size())
			{
				std::cerr << "Invalid ID range: " << stem << std::endl;
				failed_cnt++;
				return false;
			}
			if (id_map[id])
			{
				std::cerr << "ID is duplicated: " << stem << std::endl;
				failed_cnt++;
				return false;
			}
			post.id = id;
			id_map[id] = true;
			break;
		}

		case 2:
			post.date = check_char(line);
			if (post.date.size() != 11)
			{
				std::cerr << "Date format is wrong: " << stem << std::endl;
				failed_cnt++;
				return false;
			}
			break;

		case 3:
			post.title = check_char(line);
			break;

		case 4:
			break;

		default:
			if (!post.content.empty())
				post.content += "\\\n\\n";
			post.content += check_char(line);
			break;
		}
		line_num++;
	}
	return true;
}

int main()
{
	std::vector<Post_Data> posts;

	std::vector<std::filesystem::directory_entry> files;
	for (const auto &entry : std::filesystem::directory_iterator(POSTS_DIR))
		files.push_back(entry);

	for (const auto &entry : files)
	{
		Post_Data post;
		if (readPost(entry.path().string(), entry.path().stem().string(), post))
			posts.push_back(post);
	}

	std::ofstream jsonFile(JSON_PATH, std::ios::out | std::ios::trunc);
	jsonFile << FIRST_LINE << "\n";

	for (size_t i = 0; i < posts.size(); i++)
	{
		const auto &p = posts[i];
		jsonFile << "  {\n";
		jsonFile << "    " << JSON_KEY[0] << " " << p.id << ",\n";
		jsonFile << "    " << JSON_KEY[1] << " '" << p.title << "',\n";
		jsonFile << "    " << JSON_KEY[2] << " '" << p.headName << "',\n";
		jsonFile << "    " << JSON_KEY[3] << " '" << p.date << "',\n";
		jsonFile << "    " << JSON_KEY[4] << " '" << p.content << "'\n";
		jsonFile << "  }" << (i + 1 < posts.size() ? "," : "") << "\n";
	}

	jsonFile << "];\n";
	jsonFile.close();

	std::cout << "---" << std::endl;
	std::cout << posts.size() << " posts generated.\n";
	std::cout << skipped_cnt << " posts skipped.\n";
	std::cout << failed_cnt << " posts failed.\n";
	return 0;
}
