---
version: 0.3.0
date: 19/06/2026
---

# Objects

Objects are the building blocks of your app's interface. They can render text, block list, etc.

## Common Properties

All objects share the following common properties:

### `.position(rect)`

A `Rect` object that defines the position and size of the object on the terminal.

### `.draw()`

Draws the object on the terminal at the specified for frame.

## Objects types

- [Block](object/block.md): A block object that can render a rectangular area with a border
- [List](object/list.md): A list object that can render a list of items with various styles.
- [TextField](object/textfield.md): A text field object that can render dynamic content.
