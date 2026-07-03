---
version: 0.3.0
date: 19/06/2026
---

# Getting Started

This document will guide you through the process of setting up and using the TUI library in your C++ projects. Follow the steps below to get started.

## Installation

The TUI library is header-only, so you can simply download the source code and include the necessary header files in your project.

### Method 1: Via CMake FetchContent

You can use CMake's `FetchContent` module to include the TUI library in your project. Add the following lines to your `CMakeLists.txt`:

```cmake
include(FetchContent)

FetchContent_Declare(
    krowTUI
    GIT_REPOSITORY https://github.com/K10-K10/KrowTUI
    GIT_TAG latest # We suport only latest version.
)

FetchContent_MakeAvailable(krowTUI)

add_executable(your_app main.cpp)
target_link_libraries(your_app PRIVATE K10-K10::krow)
```

### Method 2: Via Git Submodule

Alternatively, you can add the TUI library as a git submodule in your project:

1. Add the submodule to your repository:

```bash
git submodule add [https://github.com/your_github_username/KrowTUI.git](https://github.com/your_github_username/KrowTUI.git) lib/KrowTUI
git submodule update --init --recursive
```

1. Add the following to your `CMakeLists.txt`:

```cmake
# Add the submodule directory
add_subdirectory(lib/KrowTUI)

# Your executable
add_executable(my_app src/main.cpp)

# Link the library
target_link_libraries(my_app PRIVATE K10-K10::krow)
```

## Usage

This library is header-only, so you can directly include the header file`K10-K10/krow.h` in your project.

```cpp
#include <K10-K10/krow.h>
```

## How to Use

First, initialize the terminal:

```cpp
app.init();
```

Then, you can create and manipulate terminal elements as needed. For example, to create a simple text element:

```cpp
krow::Text text("Hello, World!");
```

Finally, draw the terminal to see the changes:

```cpp
app.loop{[&]() {
    text.draw();
}};
```

When you're done, make sure to clean up resources:

```cpp
app.leave();
```

example code can be found in the [Examples](examples.md) section of the documentation.
