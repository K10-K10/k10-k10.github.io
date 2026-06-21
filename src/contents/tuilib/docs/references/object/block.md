---
version: 0.3.0
date: 21/06/2026
namespace: krow
---

# Block

`Block` is an object that can render a rectangular frame with a border. It can be used to create sections or containers in your app's interface.

## Methods

- [`position(rect)`](#1-positionrect): Sets the position and size of the block.
- [`draw()`](#2-draw): Draws the block on the terminal at the specified position and with the specified border style.
- [`title(text)`](#3-titletext): Sets the title of the block, which will be displayed at the top center of the block.
- [`bottom_title(text)`](#4-bottom_titletext): Sets the bottom title of the block, which will be displayed at the bottom center of the block.

### Style Methods

- [`border_type(border)`](#1-border_typeborder): Sets the border style presets of the block.
- [`borders(mask)`](#2-bordersmask): Specifies which edges of the block's border should be drawn using a bitmask.
- [`border_color(color)`](#3-border_colorcolor): Sets the color of the block's border.
- [`field_color(color)`](#4-field_colorcolor): Sets the background color of the block.

## Example

```cpp
#include <K10-K10/krow.h>

int main() {
  krow::app.init();
  krow::Block block;

  block.position({1, 1, 20, 10})
      .border_style(krow::style::Default()
                        .fg(krow::style::BasicColor::Red)
                        .bg(krow::style::BasicColor::Blue));
  krow::app.loop([&]() { block.draw(); });

  krow::app.stop();
  return 0;
}
```

## Method Details

### 1. `position(rect)`

```cpp
Block& position(const Rect& r);

```

- **Arguments**: `r: const krow::Rect&` (A `Rect` object that defines the position and size of the block)
- **Return**: `Block&` (Reference to the block for method chaining)

Sets the position and size of the block.

### 2. `draw()`

```cpp
void draw();

```

- **Arguments**: None
- **Return**: None

Draws the block on the terminal at the specified position and with the specified border style.

### 3. `title(text)`

```cpp
Block& title(const Text& text);

```

- **Arguments**: `text: const krow::Text&` (A `Text` structure that defines the content and style of the title)
- **Return**: `Block&` (Reference to the block for method chaining)

Sets the title of the block, which will be displayed at the top center of the block.

### 4. `bottom_title(text)`

```cpp
Block& bottom_title(const Text& text);

```

- **Arguments**: `text: const krow::Text&` (A `Text` structure that defines the content and style of the bottom title)
- **Return**: `Block&` (Reference to the block for method chaining)

Sets the bottom title of the block, which will be displayed at the bottom center of the block.

---

### 1. `border_type(border)`

```cpp
Block& border_type(const krow::style::Border& border);

```

- **Arguments**: `border: const krow::style::Border&` (Specifies the character set configuration for the border layout)
- **Return**: `Block&` (Reference to the block for method chaining)

Sets the character style configuration of the block's layout frame. See [Border Presets](https://www.google.com/search?q=%23border-presets) for available configurations.

### 2. `borders(mask)`

```cpp
Block& borders(krow::style::Borders mask);

```

- **Arguments**: `mask: krow::style::Borders` (A bitmask that specifies the drawing edges)
- **Return**: `Block&` (Reference to the block for method chaining)

Specifies which edges of the block's border should be rendered. Supports bitwise operators (`|` and `&`). See [Borders Bitmask Flags](https://www.google.com/search?q=%23borders-bitmask-flags) for details.

### 3. `border_color(color)`

```cpp
Block& border_color(const krow::style::Color& color);
Block& border_color(int color);

```

- **Arguments**: `color: const krow::style::Color&` / `int` (Specifies the color of the border lines)
- **Return**: `Block&` (Reference to the block for method chaining)

Sets the visual color layout utilized to draw the frame lines.

### 4. `field_color(color)`

```cpp
Block& field_color(const krow::style::Color& color);
Block& field_color(int color);

```

- **Arguments**: `color: const krow::style::Color&` / `int` (Specifies the background color fill)
- **Return**: `Block&` (Reference to the block for method chaining)

Sets the background color layer bound to the internal grid region of the block.

---

## Border Presets

The library provides predefined `krow::style::Border` instances representing distinct line styling definitions:

| Constant Name          | Box Appearance Type Description                    | Style Representation (`tl`, `tr`, `bl`, `br`, `h`, `v`) |
| ---------------------- | -------------------------------------------------- | ------------------------------------------------------- |
| `krow::style::SINGLE`  | Standard single-line box layouts.                  | `┌`, `┐`, `└`, `┘`, `─`, `│`                            |
| `krow::style::ROUNDED` | Single-line box layouts utilizing rounded corners. | `╭`, `╮`, `╰`, `╯`, `─`, `│`                            |
| `krow::style::BOLD`    | Thick/Heavy line container style layouts.          | `┏`, `┓`, `┗`, `┛`, `━`, `┃`                            |
| `krow::style::DOUBLE`  | Standard double-line character container layouts.  | `╔`, `╗`, `╚`, `╝`, `═`, `║`                            |

## Borders Bitmask Flags

The `Borders` enum represents a bitmask used to filter which edges should be active during the render cycle:

| Flag Constant     | Bitmask Shift                    | Description Value                                  |
| ----------------- | -------------------------------- | -------------------------------------------------- |
| `Borders::NONE`   | `0`                              | No layout edges are drawn.                         |
| `Borders::TOP`    | `1 << 0`                         | Draws only the top horizontal frame row.           |
| `Borders::BOTTOM` | `1 << 1`                         | Draws only the bottom horizontal frame row.        |
| `Borders::LEFT`   | `1 << 2`                         | Draws only the left vertical frame column.         |
| `Borders::RIGHT`  | `1 << 3`                         | Draws only the right vertical frame column.        |
| `Borders::ALL`    | `TOP \| BOTTOM \| LEFT \| RIGHT` | Draws all bounding frame edges (Default behavior). |
