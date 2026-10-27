#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <filesystem>
#include <regex>
#include <cstdlib>

[[noreturn]] void Error(const std::string& message){
  std::cerr << "Error: " << message << std::endl;
  std::exit(-1);
}

const std::string LIST_FILE = "./src/contents/data/list";

std::regex SEC_REGEX(R"((.+)\s(\d+))");
std::string findFileFromSec(const std::string& section){
  std::ifstream file(LIST_FILE);
  if (!file.is_open()) {
    Error("Failed to open list file.");
  }
  std::string line;
  while(std::getline(file,line)){
    std::smatch m;
    if (std::regex_match(line,m,SEC_REGEX)){
      if (m[1] == section){
        return m[2];
      }
    }
  }
  Error("Section not found in list file.");
  return "";
}

struct Post {
  std::string title;
  std::string date;
  std::string section;
  std::vector<std::string> content;
};

std::regex TITLE(R"(^title:\s?(.*))");
std::regex DATE(R"(date:\s?(.*))");
std::regex SECTION(R"(section:\s?(.*))");

Post ReadPost(std::string file_path,std::string section) {
  std::ifstream ifs("./src/contents/posts/" + file_path);
  if (!ifs.is_open()) {
    Error("Failed to open post file.");
  }
  std::string line;
  Post CurrentPost{};
  bool has_meta = false;
  std::smatch m;
  while(std::getline(ifs,line)){
    if(has_meta){
      if(line == "---"){
        has_meta = false;
      }
      else if(std::regex_match(line, m, std::regex(R"(^title:\s?(.*))"))){
        CurrentPost.title = m[1].str();
      }
      else if(std::regex_match(line, m, std::regex(R"(date:\s?(.*))"))){
        CurrentPost.date = m[1].str();
      }
      else if(std::regex_match(line, m, std::regex(R"(section:\s?(.*))"))){
        CurrentPost.section = m[1].str();
      }
    }
    else{  
      if (line == "---"){
        if (CurrentPost.section == section){
          return CurrentPost;
        }
        CurrentPost = Post{};
        has_meta = true;
      }else{
        CurrentPost.content.push_back(line);
      }
    }
  }
  if (CurrentPost.section == section){
    return CurrentPost;
  }
  Error("No post found for the specified section.");
  return CurrentPost;
}

const std::string EDIT_FILE = "./src/contents/edit.md";
void writeForFile(const Post& post){
  std::ofstream ofs(EDIT_FILE);
  if (!ofs.is_open()) {
    Error("Failed to open edit file.");
  }
  ofs << "---\n";
  ofs << "title: " << post.title << "\n";
  ofs << "date: " << post.date << "\n";
  ofs << "section: " << post.section << "\n";
  ofs << "---\n";
  for (const auto& line : post.content) {
    ofs << line << "\n";
  }
  ofs.close();
}

int main(int argc, char* argv[]) {
  if (argc < 2) {
    Error("No file specified.");
  }
  std::string section = argv[1];

  std::string fileNum = findFileFromSec(section);
  Post post = ReadPost(fileNum, section);
  writeForFile(post);
}
