---
title: "TUI Library API Reference"
date: 2026-06-11
order: 2
---

# Examples

Here are some examples of how to use the TUI library in C++.

```cpp
#include <K10-K10/terminal.h>

using namespace terminal;
int main() {
  app.init();
  Text text;
  text.contents("Hello TUI!");

  List list;
  list.items({"item1", "item2", "item3", "item4", "item5"});
  Block box;
  text.position({1, 1, 20, 1});
  list.position({1, 3, 20, 5});
  box.position({0, 0, FULL, FULL});
  app.loop([&]() {
    box.draw();
    text.draw();
    list.draw();

    input::key.read();
    auto key = input::key.getKeyCode();

    if (key == input::KeyCode::UP) {
      list.move_up();
    }
    if (key == input::KeyCode::DOWN) {
      list.move_down();
    }
    if (key == input::KeyCode::CHAR) {
      char c = input::key.getCurrentChar();
      if (c == 'q') {
        app.stop();
      }
    }
  });

  return 0;
}
```

And this is minimal `CMakeLists.txt` to build the example:

```cmake
cmake_minimum_required(VERSION 3.16)
project(app LANGUAGES CXX)

include(FetchContent)

FetchContent_Declare(
  terminal_library
  GIT_REPOSITORY https://github.com/K10-K10/Terminal-Library.git
  GIT_TAG        main
)

FetchContent_MakeAvailable(terminal_library)

add_executable(app src/main.cpp)

target_link_libraries(app PRIVATE K10-K10::terminal)
```

![Example Output](example_output.png)

### KeyBindings

- `UP`: Move up in the list
- `DOWN`: Move down in the list
- `q`: Quit the application

---

**version**: _0.2.0_ | **author**: _K10-K10_ | **update**: 11/06/2026
