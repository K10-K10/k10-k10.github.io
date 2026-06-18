# List

`List` is an object that displays a scrollable or selectable list of string items in the terminal. It supports item selection, custom cursor symbols, and comprehensive style configurations for fields, highlights, and selectors.

## Methods

- [`position(rect)`](#1-positionrect): Sets the position and size of the list.
- [`items(items)`](#2-itemsitems): Sets the entire list of items at once.
- [`items()`](#3-items): Returns a reference to the current list of items.
- [`add_item(string)`](#4-add_itemstring): Appends a single item to the end of the list.
- [`selected_item()`](#5-selected_item): Returns the text of the currently selected item.
- [`move_up()`](#6-move_up): Moves the selection cursor up by one item.
- [`move_down()`](#7-move_down): Moves the selection cursor down by one item.
- [`selected_index()`](#8-selected_index): Returns the 0-based index of the currently selected item.
- [`draw()`](#9-draw): Draws the list on the terminal with the configured items and styles.

## Styles (Method Chaining)

The `List` object provides chainable methods to customize its visual appearance:

- [`selector(symbol)`](#10-selectorsymbol): Sets the selection indicator prefix (Default: `">"`).
- [`field_color(bg)`](#11-field_colorbg): Sets the background color of the list field.
- [`text_color(fg)`](#12-text_colorfg): Sets the text color of unselected items.
- [`selector_color(fg)`](#13-selector_colorfg): Sets the color of the selector symbol.
- [`highlight_bg(bg)`](#14-highlight_bgbg): Sets the background color for the currently selected item.
- [`highlight_fg(fg)`](#15-highlight_fgfg): Sets the text color for the currently selected item.

*Note: Color methods accept either `int` values or enum values from `utils::FillColor` / `utils::TextColor`.*

## Example

```cpp
#include <K10-K10/terminal.h>

int main() {
  terminal::app.init();
  
  terminal::List list;
  terminal::Rect rect{2, 2, 20, 5}; // x, y, width, height
  
  // Method chaining setup
  list.position(rect)
      .items({"Option 1", "Option 2", "Option 3"})
      .add_item("Option 4")
      .selector("->")
      .text_color(terminal::utils::TextColor::White)
      .highlight_bg(terminal::utils::FillColor::Blue);

  terminal::app.loop([&]() {
    list.draw();
    input::key.read();
    auto key = input::key.getKeyCode();

    if (key == input::KeyCode::UP) {
      list.move_up();
    }
    if (key == input::KeyCode::DOWN) {
      list.move_down();
    }
  });
}
```

## Methods Details

### 1. position(rect)

```c++
List& position(const Rect& r);
```

- __Arguments__: `r: const terminal::Rect&` (A Rect object defining the list's bounding box)

- __Return__: `List&` (Reference to the current object for method chaining)

Sets the position and size of the list.

### 2. items(items)

```c++
List& items(std::vector<std::string> items);
```

- __Arguments__: `items: std::vector<std::string>` (A vector of strings to populate the list)

- __Return__: List& (Reference to the current object for method chaining)

Replaces the current list items with the provided vector of strings.

### 3. items()

```c++
const std::vector<std::string>& items() const;
```

- __Arguments__: None

- __Return__: `const std::vector<std::string>&` (A constant reference to the internal items vector)

Returns the entire collection of items currently stored in the list.

### 4. add_item(string)

```c++
List& add_item(const std::string& s);
```

- __Arguments__: s: const std::string& (The text of the item to add)

- __Return__: List& (Reference to the current object for method chaining)

Appends a new string item to the end of the list.

### 5. selected_item()

```c++
const std::string selected_item() const;
```

- __Arguments__: None

- __Return__: const std::string (The text content of the selected item)

Returns the string content of the item that is currently highlighted/selected.

### 6. move_up()

```c++
void move_up();
```

- __Arguments__: None
- __Return__: None

Decrements the internal selection index to move the cursor up. This includes boundary checks to prevent underflow.

### 7. move_down()

```c++
void move_down();
```

- __Arguments__: None
- __Return__: None

Increments the internal selection index to move the cursor down. This includes boundary checks based on the total number of items.

### 8. selected_index()

```c++
int selected_index() const;
```

- __Arguments__: None

- __Return__: int (The 0-based index of the active item)

Returns the numeric index of the currently selected item.

### 9. draw()

```c++
void draw() override;
```

- __Arguments__: None
- __Return__: None

Overrides the Object::draw() method. Renders the entire list component, including the background, unselected text, the active selector symbol, and the highlighted item within the specified Rect boundary.

### Style Methods

### 10. selector(symbol)

```c++
List& selector(const std::string& symbol);
```

- __Arguments__: `symbol: const std::string&` (The string to use as the selection indicator)
- __Return__: List& (Reference to the current object for method chaining)

Sets the selection indicator prefix that appears before the currently selected item. The default symbol is `">"`.

### 11. field_color(bg)

```c++
List& field_color(terminal::Color bg);
List& field_color(int bg);
```

- __Arguments__: `bg: terminal::Color` / `int` (The color to use for the list's background field)
- __Return__: List& (Reference to the current object for method chaining)

Sets the background color of the list field.

### 12. text_color(fg)

```c++
List& text_color(terminal::Color fg);
List& text_color(int fg);
```

- __Arguments__: `fg: terminal::Color` / `int` (The color to use for unselected item text)
- __Return__: List& (Reference to the current object for method chaining)

Sets the text color for unselected items in the list.

### 13. selector_color(fg)

```c++
List& selector_color(terminal::Color fg);
List& selector_color(int fg);
```

- __Arguments__: `fg: terminal::Color` / `int` (The color to use for the selector symbol)
- __Return__: List& (Reference to the current object for method chaining)

Sets the color of the selector symbol that indicates the currently selected item.

### 14. highlight_bg(bg)

```c++
List& highlight_bg(terminal::Color bg);
List& highlight_bg(int bg);
```

- __Arguments__: `bg: terminal::Color` / `int` (The color to use
for the background of the highlighted item)
- __Return__: List& (Reference to the current object for method chaining)

Sets the background color for the currently selected item in the list.

### 15. highlight_fg(fg)

```c++
List& highlight_fg(terminal::Color fg);
List& highlight_fg(int fg);
```

- __Arguments__: `fg: terminal::Color` / `int` (The color to use
for the text of the highlighted item)
- __Return__: List& (Reference to the current object for method chaining)

Sets the text color for the currently selected item in the list.

---

__version__: *0.2.0* | __author__: *K10-K10* | __update__: 11/06/2026
