#include <cstdlib>
#include <filesystem>
#include <fstream>
#include <iostream>
#include <regex>
#include <string>
#include <utility>
#include <vector>

struct Post {
  std::string title;
  std::string date;
  std::string section;
  std::vector<std::string> content;
};

constexpr int MAX_SIZE = 1000;

std::string POST_PATH = "./src/contents/post.md";

std::regex DATE(R"(date:\s?(.*))");
std::regex DATE_FORMAT(R"(^\d{2}\/\d{2}\/\d{4}$)");
std::regex SECTION(R"(section:\s?(.*))");

void Error(std::string error) {
  std::cerr << "Error : " << error << std::endl;
  std::exit(-1);
}

Post ReadPost() {
  std::ifstream ifs(POST_PATH);
  std::string line;
  Post NewPost{};
  size_t i = 0;
  while (std::getline(ifs, line)) {
    if (i == 0) {
      if (line.empty()) {
        ifs.close();
        Error("Title is required.");
      }
      NewPost.title = line;
    } else if (i == 1) {
      std::smatch m;
      if (std::regex_match(line, m, DATE)) {
        if (!std::regex_match(m[1].str(), DATE_FORMAT) || m.empty()) {
          ifs.close();
          Error("Date is required 'DD/MM/YYYY' format.");
        }
        NewPost.date = m[1].str();
      } else {
        ifs.close();
        Error("Date is required.");
      }
    } else if (i == 2) {
      std::smatch m;
      if (std::regex_match(line, m, SECTION)) {
        std::string section_;
        for (char c : m[1].str()) {
          if (c == ' ') {
            section_ += '-';
          } else {
            section_ += c;
          }
        }
        NewPost.section = section_;
      } else {
        ifs.close();
        Error("Section is require.");
      }
    } else if (i == 3) {
    } else {
      NewPost.content.push_back(line);
    }
    ++i;
  }
  ifs.close();
  return NewPost;
}

const std::string SECTION_LIST = "./src/contents/data/list";

bool hasSectionNameConflict(std::string sec_name) {
  std::ifstream ifs(SECTION_LIST);
  std::string line;
  while (std::getline(ifs, line)) {
    if (line == sec_name) {
      ifs.close();
      return true;
    }
  }
  ifs.close();
  return false;
};

void writeSectionName(std::string sec_name, int num) {
  std::ofstream ofs(SECTION_LIST, std::ios::app);
  ofs << sec_name << " " << num << std::endl;
  ofs.close();
  return;
}

bool edited = false;

void clear_post() {
  std::ofstream ofs(POST_PATH, std::ios::trunc);
  ofs << "\ndate:\nsection:\n---" << std::endl;
  ofs.close();
  return;
}

const std::string DUR_FILE = "./src/contents/data/duration";

unsigned int dateToNum(std::string date) {
  // "DD/MM/YYYY" -> YYYYMMDD
  unsigned int day = std::stoi(date.substr(0, 2));
  unsigned int month = std::stoi(date.substr(3, 2));
  unsigned int year = std::stoi(date.substr(6, 4));
  return year * 10000 + month * 100 + day;
}

bool hasDuration(std::pair<std::string, std::string> dur, std::string date) {
  const unsigned int target = dateToNum(date);
  const unsigned int start = dateToNum(dur.first);
  const unsigned int end = dateToNum(dur.second);

  return (start >= target && target >= end);
}

int getFileNum(std::string date) {
  std::ifstream ifs(DUR_FILE);
  std::string line;
  size_t i = 0;
  std::pair<std::string, std::string> dur;
  while (std::getline(ifs, line)) {
    if (i % 2 == 0) {
      dur.first = line;
    } else {
      dur.second = line;
      if (hasDuration(dur, date)) {
        ifs.close();
        return (i - 1) / 2;
      }
    }
    ++i;
  }
  // Latest file.
  ifs.close();
  if (i == 0) {
    return 0;
  }
  return (i - 1) / 2;
}

const std::string BASE_PATH = "./src/contents/posts/";
const std::regex POST_DATE(R"(^date:\s(\d{2}/\d{2}/\d{4})$)");

std::string metaPrint(const Post &post) {
  std::string str = "---\n";
  str += "title: " + post.title + "\n";
  str += "date: " + post.date + "\n";
  str += "section: " + post.section + "\n";
  str += "---\n";
  return str;
}
struct PostBlock {
  std::string date;
  std::vector<std::string> lines;
};

std::vector<PostBlock> readBlocks(const std::string &path) {
  std::vector<PostBlock> blocks;
  std::ifstream ifs(path);
  if (!ifs)
    return blocks;

  std::string line;
  std::smatch m;
  PostBlock current;
  int dash_count = 0;

  while (std::getline(ifs, line)) {
    if (line == "---") {
      if (dash_count >= 2) {
        blocks.push_back(current);
        current = PostBlock{};
        dash_count = 0;
      }
      dash_count++;
    }

    if (std::regex_match(line, m, POST_DATE)) {
      current.date = m[1].str();
    }

    current.lines.push_back(line);
  }

  if (!current.lines.empty()) {
    blocks.push_back(current);
  }
  return blocks;
}

int write(const Post &post, int num) {
  const std::string file_path = BASE_PATH + std::to_string(num);

  if (!std::filesystem::exists(file_path)) {
    std::ofstream ofs(file_path);
    ofs << metaPrint(post);
    for (const std::string &l : post.content) {
      ofs << l << "\n";
    }
    ofs.close();

    std::ofstream dur(DUR_FILE, std::ios::app);
    dur << post.date << "\n";
    dur.close();
    return num;
  }

  std::vector<PostBlock> blocks = readBlocks(file_path);

  PostBlock new_block;
  new_block.date = post.date;

  std::string meta = metaPrint(post);
  std::string cur_line;
  for (char c : meta) {
    if (c == '\n') {
      new_block.lines.push_back(cur_line);
      cur_line.clear();
    } else {
      cur_line += c;
    }
  }

  for (const std::string &l : post.content) {
    new_block.lines.push_back(l);
  }

  const unsigned int target_date_num = dateToNum(post.date);
  auto insert_pos =
      std::upper_bound(blocks.begin(), blocks.end(), target_date_num,
                       [](unsigned int val, const PostBlock &b) {
                         return val > dateToNum(b.date);
                       });
  blocks.insert(insert_pos, new_block);

  size_t total_lines = 0;
  for (const auto &b : blocks) {
    total_lines += b.lines.size();
  }

  if (total_lines > MAX_SIZE) {
    std::string last_date = blocks.empty() ? "" : blocks.back().date;
    std::ofstream dur(DUR_FILE, std::ios::app);
    dur << last_date << "\n";
    dur.close();
    return write(post, num + 1);
  }
  std::ofstream ofs(file_path, std::ios::trunc);
  for (const auto &b : blocks) {
    for (const auto &l : b.lines) {
      ofs << l << "\n";
    }
  }
  ofs.close();

  return num;
}

int main(int argc, char *argv[]) {
  Post post = ReadPost();
  if (hasSectionNameConflict(post.section)) {
    Error("Section name is conflict.");
  }
  if (argc == 2 && argv[1] == "edited") {
    POST_PATH = "./src/contents/edit.md";
    edited = true;
  }

  int num = write(post, getFileNum(post.date));
  writeSectionName(post.section, num);
  clear_post();
  std::cout << "Post edited and reuploaded." << std::endl;
  std::cout << "Post uploaded.\n" << "Number: " << num << std::endl;
  std::cout << "Title: " << post.title << std::endl;
  std::cout << "Section: " << post.section << std::endl;
  std::cout << "Contents size: " << post.content.size() << std::endl;
  std::cout << "Please deploying." << std::endl;
  return 0;
}
