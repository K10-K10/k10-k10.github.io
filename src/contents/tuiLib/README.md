# TUI Library

[![build](https://github.com/K10-K10/terminal-library/actions/workflows/build.yml/badge.svg)](https://github.com/K10-K10/terminal-library/actions/workflows/build.yml)
[![Lint](https://github.com/K10-K10/terminal-library/actions/workflows/lint.yml/badge.svg)](https://github.com/K10-K10/terminal-library/actions/workflows/lint.yml)
![GitHub Release Date](https://img.shields.io/github/release-date/K10-K10/Terminal-Library)
[![GitHub Releases](https://img.shields.io/github/release/K10-K10/Terminal-Library.svg)](https://github.com/K10-K10/Terminal-Library/releases)
[![GitHub License](https://img.shields.io/github/license/K10-K10/Terminal-Library)](https://github.com/K10-K10/Terminal-Library/blob/main/LICENSE)

TUI Library is a C++ library for creating terminal user interfaces (TUI) using the ncurses library.
It provides a simple and intuitive API for creating various types of UI components such as text, blocks, lists, and more.

## Preview

![TUI Library Preview Image](docs/example_output.png)

## Quick start

### Installation

This library is header-only, so you can simply download the source code and include the necessary header files in your project.

#### Recommended method

You can use Cmake's `FetchContent` module to include the TUI library in your procejt.
Add the following lines to your `CMakeLists.txt`

```
include(FetchContent)

FetchContent_Declare(
    terminal_library
    GIT_REPOSITORY https://github.com/K10-K10/Terminal-Library.git
    GIT_TAG main # We suport only latest version, so use main branch
)

FetchContent_MakeAvailable(terminal_library)

add_executable(<your_app> main.cpp)
target_link_libraries(<your_app> PRIVATE K10-K10::terminal)
```

Other methods is [here](Getting Started)

## Usage

You can directluy include header file:

```
#include <K10-K10/terminal.h>
```

## Example

```
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

## Documentations

- [Getting Started](./docs/getting_started.md)
- [API Reference](./docs/api_reference.md)
- [Examples](./docs/examples.md)
- [Points to Note](./docs/points.md)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

__version__: 1.1.0  | __author__: *K10-K10* |  __update__: 11/06/2026
