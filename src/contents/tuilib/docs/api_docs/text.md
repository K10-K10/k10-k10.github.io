# Text

`Text` is an object that can render a string label. It can be used to display static text.

## Methods

- [`position(rect)`](#1-positionrect): Sets the position and size of the text.
- [`content(content)`](#2-contentcontent): Sets the text content of the `Text` object.
- [`get_text()`](#3-get_text): Returns the current text content of the `Text` object.
- [`draw()`](#4-draw): Draws the text on the terminal at the specified position and with the specified styles.

## Styles

add later

## Example

```cpp
#include <K10-K10/terminal.h>

int main() {
  terminal::app.init();
  terminal::Text text;
  terminal::Rect rect{1, 1, 30, 2}; // x, y, width, height
  text.position(rect).content("Welcome to TUI Library!\nThis is a simple text object.");
  terminal::app.loop{[&]() {
    text.draw();
  }};
}
```

## Methods Details

### 1. `position(rect)`

```cpp
Text& position(const Rect& r);
```

- **Arguments**: `rect: terminal::Rect` (a `Rect` object that defines the position and size of the text)
- **Return**: None

Sets the position and size of the text.

### 2. `content(content)`

```cpp
Text& content(const std::string& text);
```

- **Arguments**: `content: std::string` (a string containing the text to display)
- **Return**: None

Sets the text content of the `Text` object.

### 3. `get_text()`

```cpp
std::string get_text() const;
```

- **Arguments**: None
- **Return**: `std::string` : A string containing the current text content of the `Text` object.

Returns the current text content of the `Text` object.

### 4. `draw()`

```cpp
void draw() const;
```

- **Arguments**: None
- **Return**: None

Draws the text on the terminal at the specified position and with the specified styles.

---

**version**: _0.2.0_ | **author**: _K10-K10_ | **update**: 11/06/2026
