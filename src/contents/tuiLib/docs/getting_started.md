# Getting Started

This document will guide you through the process of setting up and using the TUI library in your C++ projects. Follow the steps below to get started.

## Installation

The TUI library is header-only, so you can simply download the source code and include the necessary header files in your project.

### Method 1: Via CMake FetchContent

You can use CMake's `FetchContent` module to include the TUI library in your project. Add the following lines to your `CMakeLists.txt`:

```cmake
include(FetchContent)

FetchContent_Declare(
    terminal_library
    GIT_REPOSITORY https://github.com/K10-K10/Terminal-Library.git
    GIT_TAG main # We suport only latest version, so use main branch
)

FetchContent_MakeAvailable(terminal_library)

add_executable(your_app main.cpp)
target_link_libraries(your_app PRIVATE K10-K10::terminal)
```

### Method 2: Via Git Submodule

Alternatively, you can add the TUI library as a git submodule in your project:

1. Add the submodule to your repository:

```bash
git submodule add [https://github.com/your_github_username/Terminal-Library.git](https://github.com/your_github_username/Terminal-Library.git) lib/Terminal-Library
git submodule update --init --recursive
```

1. Add the following to your `CMakeLists.txt`:

```cmake
# Add the submodule directory
add_subdirectory(lib/Terminal-Library)

# Your executable
add_executable(my_app src/main.cpp)

# Link the library
target_link_libraries(my_app PRIVATE K10-K10::terminal)
```

## Usage

This library is header-only, so you can directly include the header file`K10-K10/terminal.h` in your project.

```cpp
#include <K10-K10/terminal.h>
```

## How to Use

First, initialize the terminal:

```cpp
app.init();
```

Then, you can create and manipulate terminal elements as needed. For example, to create a simple text element:

```cpp
terminal::Text text("Hello, World!");
```

Finally, draw the terminal to see the changes:

```cpp
app.loop{[&]() {
    text.draw();
}};
```

When you're done, make sure to clean up resources:

```cpp
app.stop();
```

example code can be found in the [Examples](examples.md) section of the documentation.

---

__version__: *0.2.0* | __author__: *K10-K10* | __update__: 11/06/2026
