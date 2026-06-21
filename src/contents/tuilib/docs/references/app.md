---
version: 0.3.0
date: 19/06/2026
namespace: krow
---

# App

`app` is the main class of the library. It is responsible for managing the application state, rendering the UI, and handling user input.

## Methods

- [`app.init(fps)`](#1-appinit): Initializes the application.
- [`app.loop(funcs)`](#2-appploop): Starts the main loop of the application.
- [`app.stop()`](#3-appstop): Stops the main loop and exits from alternate screen.

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

- __Arguments__: `fps: int` (the desired frames per second) - __Default__: 60
- __Return__: None

Initializes the application. This function must be called before any other functions are used.
When this function is called, the terminal enter the alternate screen and hide the cursor.

### 2. `app.loop(funcs)`

```cpp
void loop(std::function<void()> frame);
```

- __Arguments__: `frame: std::function<void()>` (the function to be called in each loop iteration)
- __Return__: None

Starts the main loop of the application. The provided function will be called in each iteration of the loop, allowing you to update the UI and handle user input.

It's received only one function, but you can use lambda functions to call multiple functions in one loop iteration.

### 3. `app.stop()`

- __Arguments__: None
- __Return__: None

Stops the main loop and exits from alternate screen.
You should call this function when you want to exit the application.
