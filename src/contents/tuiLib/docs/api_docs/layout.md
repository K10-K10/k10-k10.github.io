# Layout

This section describes the layout-related components of the TUI library.
The coordinates in the terminal are represented as (x, y), where x is the column number and y is the row number, both starting from 0.

```
(0, 0) ──> x
  │
  │
  │
  │
  ▼
  y
```

## Rect

The `Rect` class represents a rectangular area in the terminal. It is defined by its position (x, y) and its size (width, height). The `Rect` class provides methods for manipulating and querying the rectangle's properties.

- [Rect Class Reference](rect.md)

---

__version__: *0.2.0* | __author__: *K10-K10* | __update__: 11/06/2026
