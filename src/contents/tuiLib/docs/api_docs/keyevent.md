# Key

The `Key` class represents a key on the keyboard. It contains information about the key code, modifiers, and the type of event (press or release). The `KeyEvent` class is used to handle key events in the TUI library.

This class is contained in the `terminal::input` namespace and can be accessed through the `input::key` object.

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
#include <K10-K10/terminal.h>

int main() {
  terminal::app.init();

  terminal::Text text();
  text.setText("Press ESC or q to exit.").setPosition(1, 1);
  app.loop([&]{
    input::key.read();
    if (input::key.getKeyCode() == input::KeyCode::ESCAPE) {
      app.stop();
    }
    if (input::key.getKeyCode() == input::KeyCode::CHAR) {
      char c = input::key.getCurrentChar();
      // Handle character input
      if (c == 'q') {
        app.stop();
      }
    }
  })
}
```

## Methods Details

### getKeyCode()

```cpp
KeyCode getKeyCode();
```

- __Arguments__: None
- __Returns__: The key code of the key event.

Returns the key code of the key event, which can be used to determine which key was pressed or released.

### GetCurrentChar()

```cpp
char getCurrentChar();
```

- __Arguments__: None
- __Returns__: The character associated with the key event.

Returns the character associated with the key event, which is useful for handling character input.

### read()

```cpp
void read();
```

- __Arguments__: None
- __Returns__: None

Reads the next key event from the input stream and updates the internal state of the `Key` object accordingly.

---

__version__: *0.2.0* | __author__: *K10-K10* | __update__: 11/06/2026
