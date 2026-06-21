# TextField

`TextField` is an object that can render dynamic content, such as user input or variable data. It can be used to create interactive text fields in your terminal application.

## API List

### 1. `position(rect)`

- **Arguments**: `rect: terminal::Rect` (a `Rect` object that defines the position and size of the text field)
- **Return**: None

Sets the position and size of the text field.

### 2. `content(content)`

- **Arguments**: `content: std::string` (a string containing the text to display in the text field)
- **Return**: None

Sets the text content of the `TextField` object.

### 3. `get_content()`

- **Arguments**: None
- **Return**: `std::string` : A string containing the current text content of the `TextField` object.

Returns the current text content of the `TextField` object.

### 4. `move_cursor(x, y)`

- **Arguments**: `x: int` (the x-coordinate of the cursor position), `y: int` (the y-coordinate of the cursor position)
- **Return**: None

Moves the cursor to the specified position within the text field.

### 5. `insert_char(c)`

- **Arguments**: `c: char` (the character to insert at the current cursor position)
- **Return**: None

Inserts a character at the current cursor position in the text field.

### 6. `delete_char()`

- **Arguments**: None
- **Return**: None

Deletes the character at the current cursor position in the text field.

### 7. `operator[]`

- **Arguments**: `index: int` (the index of the character to access)
- **Return**: `char` : The character at the specified index in the text field.

Returns the character at the specified index in the text field.
You can access like this: `textField[0][1]` (the second character of the first line in the text field).

### 8. `draw()`

- **Arguments**: None
- **Return**: None

Draws the text field on the terminal at the specified position and with the specified styles.

---

**version**: _0.2.0_ | **author**: _K10-K10_ | **update**: 11/06/2026
