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

constexpr int MAX_SIZE = 10000;

const std::string POST_PATH = "./src/contents/post.md";

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

void writeSectionName(std::string sec_name) {
  std::ofstream ofs(SECTION_LIST, std::ios::app);
  ofs << sec_name << std::endl;
  ofs.close();
  return;
}

void clear_post() {
  std::ofstream ofs(POST_PATH, std::ios::trunc);
  ofs << "\ndate:\nsection:\n---\n" << std::endl;
  ofs.close();
  return;
}

const std::string DUR_FILE = "./src/contents/data/duration";

unsigned int dateToNum(std::string date) {
  // "DD/MM/YYYY" to YYYYMMDD.
  unsigned int result = std::stoi(date.substr(0, 2));
  result += 100 * std::stoi(date.substr(3, 2));
  result += 10000 * std::stoi(date.substr(6, 4));
  return result;
}

bool hasDuration(std::pair<std::string, std::string> dur, std::string date) {
  const unsigned int target = dateToNum(date);
  return dateToNum(dur.first) <= target && target <= dateToNum(dur.second);
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

int write(const Post &post, int num) {
  if (!std::filesystem::exists(BASE_PATH + std::to_string(num))) {
    std::ofstream ofs(BASE_PATH + std::to_string(num));
    ofs << metaPrint(post) << std::endl;
    for (std::string l : post.content) {
      ofs << l << std::endl;
    }
    ofs.close();
    std::ofstream dur(DUR_FILE, std::ios::app);
    dur << post.date << std::endl;
    dur.close();
    return num;
  }
  std::ifstream ifs(BASE_PATH + std::to_string(num));
  std::string line;
  std::vector<std::string> lines;
  std::smatch m;
  std::string last_date = "";
  size_t i = 0;
  while (std::getline(ifs, line)) {
    lines.push_back(line);
    if (std::regex_match(line, m, POST_DATE)) {
      last_date = m[1].str();
    }
    ++i;
  }
  if (lines.size() > MAX_SIZE) {
    std::ofstream dur(DUR_FILE, std::ios::app);
    dur << last_date << std::endl;
    dur.close();
    return write(post, num + 1);
  }
  std::ofstream ofs(BASE_PATH + std::to_string(num), std::ios::app);
  ofs << metaPrint(post) << std::endl;
  for (std::string l : post.content) {
    ofs << l << std::endl;
  }
  return num;
}

int main() {
  Post post = ReadPost();
  if (hasSectionNameConflict(post.section)) {
    Error("Section name is conflict.");
  }
  int num = write(post, getFileNum(post.date));
  // writeSectionName(post.section);
  // clear_post();
  std::cout << "Post uploaded.\n" << "Number: " << num << std::endl;
  std::cout << "Title: " << post.title << std::endl;
  std::cout << "Section: " << post.section << std::endl;
  std::cout << "Contents size: " << post.content.size() << std::endl;
  std::cout << "Please deploying." << std::endl;
  return 0;
}
