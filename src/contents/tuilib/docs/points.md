---
version: 0.3.0
date: 19/06/2026
---

# Points to Note

Here are some important points to note when using the TUI library:

1. **Coordinate System**: The TUI library uses a coordinate system where the top-left corner of the terminal is (0, 0). The x-coordinate increases to the right, and the y-coordinate increases downwards.

2. **Where to Draw**: When `app` is initialized, it entered alternate window, and when `app.leave()` called, it will exit alternate window.

3. **If process stopped by `Ctrl + C`**: This library has a signal handler for `SIGINT`, and when the process is stopped by `Ctrl + C`, auto call `app.leave()`, so the terminal will be restored to its original state.

4. **Order of Drawing**: The order of drawing objects matters. Objects drawn later will be displayed on top of objects drawn earlier. Make sure to draw background elements first and foreground elements later. I'll add more options to control the order of drawing later.
