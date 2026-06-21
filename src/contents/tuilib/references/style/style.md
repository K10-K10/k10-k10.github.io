---
version: 0.3.0
date: 20/06/2026
namespace: krow::style
---

# Color & Style

The `style` namespace provides comprehensive tools for managing colors and text formatting attributes in the terminal. It includes the `Color` structure for managing colors (Basic, 8-bit Extended 256, and 24-bit TrueColor RGB) and the `Style` structure to bind foreground colors, background colors, and text decoration flags (like bold or underline) together.

---

## BasicColor Enum

The `BasicColor` enum class defines the standard 8 terminal colors.

| Enum Value | Description |
|:---|:---|
| `BasicColor::Default` | The terminal's default color |
| `BasicColor::Black` | Black |
| `BasicColor::Red` | Red |
| `BasicColor::Green` | Green |
| `BasicColor::Yellow` | Yellow |
| `BasicColor::Blue` | Blue |
| `BasicColor::Magenta` | Magenta |
| `BasicColor::Cyan` | Cyan |
| `BasicColor::White` | White |

---

## Color Structure

`krow::style::Color` handles different color types using three internal categories defined by `Color::Type`: `Basic`, `Extended256`, and `RGB`.

### Constructors

- `Color()`  
  Initializes as a `Type::Basic` color pointing to `BasicColor::Default`.
- `Color(BasicColor bc)`  
  Initializes as a `Type::Basic` color with the specified standard enum value.
- `Color(int code)`  
  Initializes as a `Type::Extended256` color utilizing an 8-bit color index (0-255).
- `Color(int r, int g, int b)`  
  Initializes as a `Type::RGB` color utilizing 24-bit TrueColor red, green, and blue components.

### Inspector Methods

- `get_type() -> Color::Type`  
  Returns the type classification of the color (`Basic`, `Extended256`, or `RGB`).
- `get_basic() -> BasicColor`  
  Returns the `BasicColor` enum value (Only applicable if type is `Basic`).
- `get_code256() -> int`  
  Returns the 8-bit color index code (Only applicable if type is `Extended256`).
- `get_rgb() -> std::array<int, 3>`  
  Returns an array containing `{r, g, b}` color intensities (Only applicable if type is `RGB`).

---

## Style Structure

`krow::style::Style` compiles both layout colors and visual formatting flags into a unified design state. It provides chainable methods to easily construct text attributes.

### Non-member Helper Functions

- `krow::style::Default()`  
  Returns a clean, default-initialized `Style` object.

### Color Configuration Methods

- [`fg(color)`](#style-fg): Sets the text foreground color.
- [`bg(color)`](#style-bg): Sets the layout background color.

### Text Decoration Methods (Flags)

- [`None()`](#style-none): Resets all text decoration flags back to none.
- [`bold()`](#style-decorations): Appends the Bold modification.
- [`dim()`](#style-decorations): Appends the Dim/Faint modification.
- [`italic()`](#style-decorations): Appends the Italic modification.
- [`underline()`](#style-decorations): Appends the Underline modification.
- [`blink()`](#style-decorations): Appends the standard Blink modification.
- [`rapidBlink()`](#style-decorations): Appends the Rapid Blink modification.
- [`inverted()`](#style-decorations): Inverts foreground and background colors.
- [`hidden()`](#style-decorations): Conceals text without releasing layout boundaries.
- [`strikethrough()`](#style-decorations): Appends a strikeout line.
- [`doubleUnderline()`](#style-decorations): Appends a double underline modification.
- [`overLine()`](#style-decorations): Appends a top overline modification.

---

## Example Usage

```cpp
#include <K10-K10/krow.h>

int main() {
  krow::app.init();

  // Create customized colors
  krow::style::Color custom_red(krow::style::BasicColor::Red);
  krow::style::Color gold_256(220);
  krow::style::Color sky_rgb(135, 206, 235);

  // Combine colors and text effects using Method Chaining
  krow::style::Style alert_style = krow::style::Default();
  alert_style.fg(custom_red)
             .bg(gold_256)
             .bold()
             .underline();

  // Apply alert_style inside components or text streams as supported...
  
  krow::app.stop();
  return 0;
}

```

---

## Style Methods Details

### `fg(color)`

```cpp
Style& fg(const krow::style::Color& color);

```

- **Arguments**: `color: const krow::style::Color&` (The color structure to apply to the text foreground)
- **Return**: `Style&` (Reference to the current style for method chaining)

Applies a custom background color layer mapping. Internally resolves standard codes, 256 indices, or RGB structures into standard ANSI configurations.

### `bg(color)`

```cpp
Style& bg(const krow::style::Color& color);

```

- **Arguments**: `color: const krow::style::Color&` (The color structure to apply to the text background)
- **Return**: `Style&` (Reference to the current style for method chaining)

Applies a custom background color layer mapping.

### `None()`

```cpp
Style& None();

```

- **Arguments**: None
- **Return**: `Style&` (Reference to the current style for method chaining)

Clears out all previously bitwise-assigned text decoration flags, resetting them to `None`.

### Text Decoration Modifiers

```cpp
Style& bold();
Style& dim();
Style& italic();
Style& underline();
Style& blink();
Style& rapidBlink();
Style& inverted();
Style& hidden();
Style& strikethrough();
Style& doubleUnderline();
Style& overLine();

```

- **Arguments**: None
- **Return**: `Style&` (Reference to the current style for method chaining)

Each method bitwise-appends a specific visual modifier to the internal formatting flag mask. Multiple configurations can be chained together (e.g., `style.bold().italic().underline()`).
