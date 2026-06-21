---
version: 0.3.0
date: 19/06/2026
namespace: krow::input
---

# Key

The `Key` class represents a key on the keyboard. It contains information about the key code, modifiers, and the type of event (press or release). The `KeyEvent` class is used to handle key events in the TUI library.

This class is contained in the `krow::input` namespace and can be accessed through the `input::key` object.

## Methods

- [getKeyCode()](#getkeycode): Returns the key code of the key event.
- [getCurrentChar()](#getcurrentchar): Returns the character associated with the key event.
- [read()](#read): Reads the next key event from the input stream.

## KeyCode

The `KeyCode` enum defines the key codes for various keys on the keyboard. Some of the key codes include:

- `None`: No key event.
- `UNKNOWN`: Unknown key event.
- `ESCAPE`: Escape key.
- `ENTER`: Enter key.
- `BACKSPACE`: Backspace key.
- `TAB`: Tab key.
- `SPACE`: Space key.
- `UP`: Up arrow key.
- `DOWN`: Down arrow key.
- `LEFT`: Left arrow key.
- `RIGHT`: Right arrow key.
- `CHAR`: Character key (for printable characters).

## Example

```cpp
#include <K10-K10/krow.h>

using namespace krow;
int main() {
  app.init();

  TextField text;
  text.contents({Line("Prease  ESC or q to exit."_s)}).position({0, 0, 30, 30});
  app.loop([&] {
    text.draw();
    input::key.read();
    auto key = input::key.getKeyCode();
    if (key == input::KeyCode::ESC) {
      app.stop();
    }
    if (key == input::KeyCode::CHAR) {
      char c = input::key.getCurrentChar();
      if (c == 'q') {
        app.stop();
      }
    }
  });
  return 0;
}

```

## Methods Details

### getKeyCode()

```cpp
KeyCode getKeyCode();
```

- **Arguments**: None
- **Returns**: The key code of the key event.

Returns the key code of the key event, which can be used to determine which key was pressed or released.
When you call this method, keyCode will be set to None. So you must set for variable to store the value of keyCode before calling this method.

### GetCurrentChar()

```cpp
char getCurrentChar();
```

- **Arguments**: None
- **Returns**: The character associated with the key event.

Returns the character associated with the key event, which is useful for handling character input.
When you call this method, the current char is set to None(`\0`). So you must set for variable to store the value of keyCode before calling this method.

### read()

```cpp
void read();
```

- **Arguments**: None
- **Returns**: None

Reads the next key event from the input stream and updates the internal state of the `Key` object accordingly.
