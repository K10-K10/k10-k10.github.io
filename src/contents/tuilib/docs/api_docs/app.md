# App

`app` is the main class of the library. It is responsible for managing the application state, rendering the UI, and handling user input.

## Methods

- [`app.init(fps)`](#1-appinit): Initializes the application.
- [`app.loop(funcs)`](#2-appploop): Starts the main loop of the application.
- [`app.stop()`](#3-appstop): Stops the main loop and exits from alternate screen.

## Example

```cpp
#include <K10-K10/terminal.hpp>

int main() {
  terminal::app.init(60);

  terminal::app.loop([]() {
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

### 3. `app.stop()`

- **Arguments**: None
- **Return**: None

Stops the main loop and exits from alternate screen.
You should call this function when you want to exit the application.

---

**version**: _0.2.0_ | **author**: _K10-K10_ | **update**: 11/06/2026
