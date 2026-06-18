# TextField

`TextField` is an object that can render dynamic content, such as user input or variable data. It can be used to create interactive text fields in your terminal application.

## API List

### 1. `position(rect)`

- __Arguments__: `rect: terminal::Rect` (a `Rect` object that   defines the position and size of the text field)
- __Return__: None

Sets the position and size of the text field.

### 2. `content(content)`

- __Arguments__: `content: std::string` (a string containing the text to display in the text field)
- __Return__: None

Sets the text content of the `TextField` object.

### 3. `get_content()`

- __Arguments__: None
- __Return__: `std::string` : A string containing the current text content of the `TextField` object.

Returns the current text content of the `TextField` object.

### 4. `move_cursor(x, y)`

- __Arguments__: `x: int` (the x-coordinate of the cursor position), `y: int` (the y-coordinate of the cursor position)
- __Return__: None

Moves the cursor to the specified position within the text field.

### 5. `insert_char(c)`

- __Arguments__: `c: char` (the character to insert at the current cursor position)
- __Return__: None

Inserts a character at the current cursor position in the text field.

### 6. `delete_char()`

- __Arguments__: None
- __Return__: None

Deletes the character at the current cursor position in the text field.

### 7. `operator[]`

- __Arguments__: `index: int` (the index of the character to access)
- __Return__: `char` : The character at the specified index in the text field.

Returns the character at the specified index in the text field.
You can access like this: `textField[0][1]` (the second character of the first line in the text field).

### 8. `draw()`

- __Arguments__: None
- __Return__: None

Draws the text field on the terminal at the specified position and with the specified styles.

---

__version__: *0.2.0* | __author__: *K10-K10* | __update__: 11/06/2026
