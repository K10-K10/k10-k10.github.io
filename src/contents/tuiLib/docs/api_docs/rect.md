# Rect

Rect is a class that represents a rectangular area in the terminal. It is defined by its position (x, y) and its size (width, height). The `Rect` class provides methods for manipulating and querying the rectangle's properties.

## Constructor

```cpp
terminal::Rect(int x, int y, int width, int height);
```

## Use window size

If you want to use the window size, you can use the `FULL` constant for width and height.
It will automatically adjust to the current window size.

```cpp
terminal::Rect rect(0, 0, FULL, FULL);
```

---

__version__: *0.2.0* | __author__: *K10-K10* | __update__: 11/06/2026
