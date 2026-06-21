---
version: 0.3.0
date: 20/06/2026
namespace: krow
---

# List

`List` is an object that displays a scrollable or selectable list of items in the terminal. It supports item selection, custom cursor symbols, and comprehensive style configurations via `style::Style` structures.

## Methods

- [`position(rect)`](#1-positionrect): Sets the position and size of the list.
- [`items(items)`](#2-itemsitems): Sets the entire list of items at once.
- [`items()`](#3-items): Returns a reference to the current list of items.
- [`add_item(text)`](#4-add_itemtext): Appends a single item to the end of the list.
- [`clear()`](#5-clear): Clears all items from the list.
- [`selected_item()`](#6-selected_item): Returns the `Text` object of the currently selected item.
- [`move_up()`](#7-move_up): Moves the selection cursor up by one item.
- [`move_down()`](#8-move_down): Moves the selection cursor down by one item.
- [`selected_index()`](#9-selected_index): Returns the 0-based index of the currently selected item.
- [`draw()`](#10-draw): Draws the list on the terminal with the configured items and styles.

### Styles & Visuals (Method Chaining)

The `List` object provides chainable methods to customize its visual appearance:

- [`selector_symbol(symbol)`](#11-selector_symbolsymbol): Sets the selection indicator prefix (Default: `">"`).
- [`contents_style(style)`](#12-contents_stylestyle): Sets the general style (text and background) for unselected items.
- [`selector_style(style)`](#13-selector_stylestyle): Sets the style for the active selector symbol.
- [`highlight_style(style)`](#14-highlight_stylestyle): Sets the style for the currently selected item.

## Example

```cpp
#include <K10-K10/krow.h>

int main() {
  krow::app.init();
  
  krow::List list;
  krow::Rect rect{2, 2, 20, 5}; // x, y, width, height
  
  // Custom styles
  krow::style::Style standard_style;
  standard_style.fg(krow::utils::TextColor::White);
  
  krow::style::Style select_style;
  select_style.bg(krow::utils::FillColor::Blue).fg(krow::utils::TextColor::White);

  // Method chaining setup
  list.position(rect)
      .items({krow::Text("Option 1"), krow::Text("Option 2")})
      .add_item(krow::Text("Option 3"))
      .selector_symbol("->")
      .contents_style(standard_style)
      .highlight_style(select_style);

  krow::app.loop([&]() {
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
  
  krow::app.stop();
  return 0;
}

```

## Methods Details

### 1. position(rect)

```c++
List& position(const Rect& r);

```

- **Arguments**: `r: const krow::Rect&` (A `Rect` object defining the list's bounding box)
- **Return**: `List&` (Reference to the current object for method chaining)

Sets the position and size of the list.

### 2. items(items)

```c++
List& items(std::vector<Text> items);

```

- **Arguments**: `items: std::vector<krow::Text>` (A vector of `Text` structures to populate the list)
- **Return**: `List&` (Reference to the current object for method chaining)

Replaces the current list items with the provided vector of `Text` objects.

### 3. items()

```c++
const std::vector<Text>& items() const;

```

- **Arguments**: None
- **Return**: `const std::vector<krow::Text>&` (A constant reference to the internal items vector)

Returns the entire collection of items currently stored in the list.

### 4. add_item(text)

```c++
List& add_item(const Text& s);

```

- **Arguments**: `s: const krow::Text&` (The `Text` structure of the item to add)
- **Return**: `List&` (Reference to the current object for method chaining)

Appends a new `Text` item to the end of the list.

### 5. clear()

```c++
List& clear();

```

- **Arguments**: None
- **Return**: `List&` (Reference to the current object for method chaining)

Removes all elements from the internal list data structure.

### 6. selected_item()

```c++
Text selected_item() const;

```

- **Arguments**: None
- **Return**: `krow::Text` (The `Text` structure of the selected item)

Returns the `Text` content and styling of the item that is currently highlighted/selected.

### 7. move_up()

```c++
void move_up();

```

- **Arguments**: None
- **Return**: None

Decrements the internal selection index to move the cursor up. Includes boundary checks to prevent underflow.

### 8. move_down()

```c++
void move_down();

```

- **Arguments**: None
- **Return**: None

Increments the internal selection index to move the cursor down. Includes boundary checks based on the total number of items.

### 9. selected_index()

```c++
int selected_index() const;

```

- **Arguments**: None
- **Return**: `int` (The 0-based index of the active item)

Returns the numeric index of the currently selected item.

### 10. draw()

```c++
void draw() override;

```

- **Arguments**: None
- **Return**: None

Overrides the `Object::draw()` method. Renders the entire list component, including the background, unselected items, the active selector symbol, and the highlighted item within the specified `Rect` boundary.

---

## Style Methods Details

### 11. selector_symbol(symbol)

```c++
List& selector_symbol(const std::string& symbol);

```

- **Arguments**: `symbol: const std::string&` (The string to use as the selection indicator)
- **Return**: `List&` (Reference to the current object for method chaining)

Sets the selection indicator prefix that appears before the currently selected item. The default symbol is `">"`.

### 12. contents_style(style)

```c++
List& contents_style(const style::Style& s);

```

- **Arguments**: `s: const krow::style::Style&` (The style configuration for standard list items)
- **Return**: `List&` (Reference to the current object for method chaining)

Sets the default foreground and background style for unselected items in the list.

### 13. selector_style(style)

```c++
List& selector_style(const style::Style& s);

```

- **Arguments**: `s: const krow::style::Style&` (The style configuration for the selector symbol)
- **Return**: `List&` (Reference to the current object for method chaining)

Sets the visual style applied to the active selector symbol.

### 14. highlight_style(style)

```c++
List& highlight_style(const style::Style& s);

```

- **Arguments**: `s: const krow::style::Style&` (The style configuration for the active item)
- **Return**: `List&` (Reference to the current object for method chaining)

Sets the text and background style used exclusively for the currently highlighted item.
