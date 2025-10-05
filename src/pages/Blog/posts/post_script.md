---
3
05-Oct-2025
Create a script for this blog
---
Until now, this blog written directly into JSON files.
However, that was a faff. Because it should have escape characters.

Therefore, I created script to automatically generate JSON file from text files.
It was written in C++.

Text file format
File name -> Page header name
First, describe the page data

---
ID
Date
Title
---

I had never used a file system library before,
and handling “\\n” was difficult.

I wish to add elements such as “title” and “table”.
Ultimately, I want to be able to write in Markdown format.
