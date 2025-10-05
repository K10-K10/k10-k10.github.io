#include <iostream>
#include <filesystem>
#include <fstream>
#include <string>
#include <vector>
#include <algorithm>

const std::string POSTS_DIR = "./posts/";
const std::string JSON_PATH = "./posts.js";
const std::string FIRST_LINE = "export const posts = [";
const std::string JSON_KEY[5] = {"id:", "title:", "headName:", "date:", "content:"};

struct Post_Data
{
	int id;
	std::string title, headName, date, content;
};

std::string check_char(std::string &line)
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
				std::cout << stem << " is private, skipped\n";
				return false;
			}
			break;
		case 1:
			post.id = std::stoi(line);
			break;
		case 2:
			post.date = check_char(line);
			break;
		case 3:
			post.title = check_char(line);
			break;
		case 4:
			break;
		default:
			if (!post.content.empty())
				post.content += "\\n";
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

	std::cout << "Generated " << posts.size() << " posts successfully.\n";
	return 0;
}
