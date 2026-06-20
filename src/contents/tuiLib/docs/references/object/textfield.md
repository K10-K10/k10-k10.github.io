---
version: 0.3.0
date: 20/06/2026
---

# TextField

`TextField` is an object that can render dynamic and interactive text fields in your terminal application. It supports multi-line text structured as a vector of `Text` objects, cursor movement, character insertion/deletion, and dedicated style configurations for both text and the cursor.

## Methods

- [`position(rect)`](#1-positionrect): Sets the position and size of the text field.
- [`contents(text)`](#2-contentstext): Sets the text content of the text field using a vector of `Text` objects.
- [`get_contents()`](#3-get_contents): Returns the current text contents of the text field.
- [`move_cursor(x, y)`](#4-move_cursorx-y): Moves the cursor to the specified position within the text field.
- [`insert_char(c)`](#5-insert_charc): Inserts a character or a short string at the current cursor position.
- [`delete_char()`](#6-delete_char): Deletes the character at the current cursor position.
- [`operator[]`](#7-operator): Accesses the `Text` object at the specified line index.
- [`draw()`](#8-draw): Draws the text field on the terminal at the specified position with configured styles.

### Style Methods (Method Chaining)

- [`text_style(style)`](#9-text_stylestyle): Sets the text style for the content inside the field.
- [`cursor_style(style)`](#10-cursor_stylestyle): Sets the visual style for the input cursor.

---

## Method Details

### 1. `position(rect)`

```cpp
TextField& position(const Rect& r);

```

- **Arguments**: `r: const krow::Rect&` (A `Rect` object that defines the position and size of the text field)
- **Return**: `TextField&` (Reference to the current object for method chaining)

Sets the position and size of the text field.

### 2. `contents(text)`

```cpp
TextField& contents(const std::vector<Text>& text);

```

- **Arguments**: `text: const std::vector<krow::Text>&` (A vector of `Text` structures containing the content to display)
- **Return**: `TextField&` (Reference to the current object for method chaining)

Sets the text content of the `TextField` object.

### 3. `get_contents()`

```cpp
std::vector<Text> get_contents() const;

```

- **Arguments**: None
- **Return**: `std::vector<krow::Text>` (A vector containing the current text layers/lines of the text field)

Returns the current internal text content of the `TextField` object.

### 4. `move_cursor(x, y)`

```cpp
TextField& move_cursor(int x, int y);

```

- **Arguments**: `x: int` (The column/x-coordinate), `y: int` (The line/y-coordinate)
- **Return**: `TextField&` (Reference to the current object for method chaining)

Moves the cursor to the specified coordinates within the text field bounds.

### 5. `insert_char(c)`

```cpp
TextField& insert_char(const std::string& c);

```

- **Arguments**: `c: const std::string&` (The character or string segment to insert at the current cursor position)
- **Return**: `TextField&` (Reference to the current object for method chaining)

Inserts a character (or multi-byte string character) at the current cursor location in the text field.

### 6. `delete_char()`

```cpp
TextField& delete_char();

```

- **Arguments**: None
- **Return**: `TextField&` (Reference to the current object for method chaining)

Deletes the character at the current cursor position in the text field.

### 7. `operator[]`

```cpp
Text& operator[](size_t index);
const Text& operator[](size_t index) const;

```

- **Arguments**: `index: size_t` (The 0-based index of the line/Text element to access)
- **Return**: `krow::Text&` (A reference to the `Text` structure at the specified index)

Returns the `Text` object at the specified index in the text field.
You can use it to chain access to specific characters or sub-elements, for example: `textField[0][1]` (accesses the second character of the first text line).

### 8. `draw()`

```cpp
void draw() override;

```

- **Arguments**: None
- **Return**: None

Draws the text field component on the terminal screen at its specified position, rendering the text content and the interactive cursor with their corresponding styles.

---

## Style Methods Details

### 9. `text_style(style)`

```cpp
TextField& text_style(const style::Style& s);

```

- **Arguments**: `s: const krow::style::Style&` (The style configuration structure)
- **Return**: `TextField&` (Reference to the current object for method chaining)

Sets the default foreground, background, and text modifications for the text content inside the field.

### 10. `cursor_style(style)`

```cpp
TextField& cursor_style(const style::Style& s);

```

- **Arguments**: `s: const krow::style::Style&` (The style configuration structure)
- **Return**: `TextField&` (Reference to the current object for method chaining)

Sets the style applied specifically to the interactive input cursor (e.g., color or background inversion).
