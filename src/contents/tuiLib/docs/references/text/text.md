---
version: 0.3.0
date: 20/06/2026
namespace: krow
---

# Text

This page covers how draw text in TUI library.

`Text` is composed of `Line`s, and which are composed of `Span`s. A `Span` is a string with a style, and a `Line` is a collection of `Span`s. The `Text` object is a collection of `Line`s.

## Span

A `Span` is a string with a style. It is represented by the `Span` struct, which has two fields: `content` and `style`. The `content` field is a string that represents the text to be displayed, and the `style` field is a `Style` object that represents the style of the text.

e.g.

```cpp
krow::Span span = "Hello, World!";
span.style(style::Default().fg(color(krow::utils::TextColor::Red)));
```

If you want to create a `Span` from a string literal, you can use the `operator""_s` user-defined literal.
So this character string is equivalent to Span with default style:

```cpp
"Hello, World!"_s;
```

## Line

A `Line` is a collection of `Span`s. It is represented by the `Line` struct, which has one field: `spans`. The `spans` field is a vector of `Span`s that represents the text to be displayed in the line.

e.g.

```cpp
krow::Line line = "Hello, "_s + "World!"_s;
```

You also can call `break_ln()` method to break a line into multiple lines.

> [!WARNING]
> `break_ln()` does not work currently.

So if you write:

```cpp
krow::Line line = "This is first line."_s;
krow::Line line2 = "This is second line."_s;
krow::Text text = line + line2;
```

it will be rendered as:

```text
This is first line.
This is second line.
```

You may already notice that `Line` and `Span` can be concatenated with `operator+`, which will create a new `Line` or `Text` object with the concatenated `Span`s or `Line`s.

## Text

A `Text` is a collection of `Line`s. It is represented by the `Text` struct, which has one field: `lines`. The `lines` field is a vector of `Line`s that represents the text to be displayed.

e.g.

```cpp
krow::Line line1 = "This is first line."_s + "This is second line."_s;
krow::Line line2 = "This is third line."_s;
krow::Text text = line1 + line2;
```

### Alignment

You can set the alignment of the text by calling `align_center()`, `align_left()`, or `align_right()` methods on a `Text` object.

Default alignment is left-aligned. You can also set the alignment of a `Line` or `Span` object, and the alignment will be inherited by the `Text` object.

```cpp
krow::Text text = "This is first line."_s.align_center() + "This is second line."_s;
```

This will center-align the text.

## Example

```cpp
#include <K10-K10/krow.h>

int main() {
    krow::app.init();
    krow::Text text = "Hello world!"_s.align_center() + "This is a TUI library."_s.align_left() + "Enjoy it!"_s.align_right();
    TextField textfield;
    textfield.position({1, 1, 30, 10})
        .field_color(krow::utils::FillColor::Blue)
        .text_color(krow::utils::TextColor::White);
        .content(text);
    krow::app.loop([&]() {
        textfield.draw();
    });

    krow::app.stop();
    return 0;
}
```
