---
version: 0.3.0
date: 2/07/2026
namespace: krow
---

# App

`app` is the main class of the library. It is responsible for managing the application state, rendering the UI, and handling user input.

## Methods

- [`app.init(fps)`](#1-appinit): Initializes the application.
- [`app.loop(funcs)`](#2-appploop): Starts the main loop of the application.
- [`app.leave()`](#3-appleave): stops the main loop and exits from alternate screen.
- [`app.attach()`](#4-appattach): Attaches the application to the terminal, allowing it to run in the foreground.
- [`app.detach()`](#5-appdetach): Detaches the application from the terminal, allowing it to run in the background.
- [`app.dump(std::string text)](#6-appdump): Append the text to dump. Those text will be printed when the application is exited.

## Example

```cpp
#include <K10-K10/krow.hpp>

int main() {
  krow::app.init(60);

  krow::app.loop([]() {
    // Your code here
  });

  return 0;
}
```

## Methods Details

### 1. `app.init(fps)`

```cpp
void init(int fps = 60);
```

- **Arguments**: `fps: int` (the desired frames per second) - **Default**: 60
- **Return**: None

Initializes the application. This function must be called before any other functions are used.
When this function is called, the terminal enter the alternate screen and hide the cursor.

### 2. `app.loop(funcs)`

```cpp
void loop(std::function<void()> frame);
```

- **Arguments**: `frame: std::function<void()>` (the function to be called in each loop iteration)
- **Return**: None

Starts the main loop of the application. The provided function will be called in each iteration of the loop, allowing you to update the UI and handle user input.

It's received only one function, but you can use lambda functions to call multiple functions in one loop iteration.

### 3. `app.leave()`

```cpp
void leave();
```

- **Arguments**: None
- **Return**: None

stops the main loop and exits from alternate screen.
You should call this function when you want to exit the application.

### 4. `app.attach()`

```cpp
void attach();
```

- **Arguments**: None
- **Return**: None

Attaches the application to the terminal, allowing it to run in the foreground. This function is useful when you want to run the application in a terminal that is already running another process.

### 5. `app.detach()`

```cpp
void detach();
```

- **Arguments**: None
- **Return**: None

Detaches the application from the terminal, allowing it to run in the background. This function is useful when you want to run the application in a terminal that is already running another process.

### 6. `app.dump(std::string text)`

```cpp
void dump(std::string text);
```

- **Arguments**: `text: std::string` (the text to be appended to the dump)
- **Return**: None

Appends the text to dump. Those text will be printed when the application is exited.
