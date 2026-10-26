#include <iostream>
#include <vector>
#include <string>
#include <filesystem>
#include <fstream>
#include <regex>
#include <cstdlib>

[[noreturn]] void Error(std::string str){
  std::cerr<<"Error: " <<  str<<std::endl;
  std::exit(-1);
}

struct Post {
  std::string title;
  std::string date;
  std::string section;
  int content_size = 0;
};

const std::string SECTION_LIST = "./src/contents/data/list";
std::regex DEVSEC(R"(^(.*)\s(\d+)$)");

int fetchFileNum(std::string section){
  std::ifstream ifs(SECTION_LIST);
  std::string line;
  std::smatch m;
  std::vector<std::string> lines;
  int num = -1;
  while (std::getline(ifs, line)) {
    std::regex_match(line,m,DEVSEC);
    if (m[1].str() == section) {
      ifs.close();
      num = std::stoi(m[2].str());
    }else{
      lines.push_back(line);
    }
  }
  ifs.close();
  if (num == -1){
    Error("post not Found.");
  }else{
    std::ofstream ofs(SECTION_LIST,std::ios::trunc);
    for(std::string l:lines){
      ofs<< l << std::endl;
    }
  }
  return num;
}

const std::string BASE_PATH = "./src/contents/posts/";
std::regex TITLE(R"(^title:\s(.*)$)");
std::regex DATE(R"(^date:\s(.*)$)");
std::regex SECTION(R"(^section:\s(.*)$)");

Post removePost(int num,std::string section){
  std::ifstream ifs(BASE_PATH + std::to_string(num));
  std::string line;
  int cnt_bar = 0;
  Post current;
  Post removed;
  bool has_meta = false;
  bool remove = false;
  std::vector<std::string> lines;
  std::smatch m;
  while(std::getline(ifs,line)){
    if(has_meta){
      if(line == "---"){
        if (current.section == section){
          removed = current;
          remove = true;
        }else{
          lines.push_back("---");
          lines.push_back("title: " + current.title);
          lines.push_back("date: " + current.date);
          lines.push_back("section: " + current.section);
          lines.push_back("---");
        }
        current = Post{};
        has_meta = false;
      }
      else if(std::regex_match(line,m,TITLE)){
        current.title = m[1].str();
      }else if (std::regex_match(line,m,DATE)){
        current.date = m[1].str();
      }
      else if (std::regex_match(line,m,SECTION)){
        current.section = m[1].str();
      }else{
        std::cout << line<< std::endl;
        Error("meta data is broken.");
      }
    }
    else if (!has_meta){
      if(line=="---"){
        has_meta = true;
        remove = false;
      }
      else if (remove){
        ++removed.content_size;
      }
      else{
        lines.push_back(line);
      }
    }
  }
  ifs.close();
  std::ofstream ofs(BASE_PATH + std::to_string(num),std::ios::trunc);
  for(std::string l:lines){
    ofs << l << std::endl;
  }
  return removed;
}

int main(int argc,char** argv){
  if(argc!=2){
    Error("Usage: ./remove <post_section>");
  }
  std::string post_sec = argv[1];
  int num = fetchFileNum(post_sec);
  Post post = removePost(num,post_sec);
  std::cout << "Post removed.\nFile num: " << num << std::endl;
  std::cout << "Title: " << post.title << std::endl;
  std::cout << "Section: " << post.section << std::endl;
  std::cout << "Date: " << post.date << std::endl;
  std::cout << "Contents size: " << post.content_size << std::endl; 
  return 0;
}
