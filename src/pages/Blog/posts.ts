export interface Post {
  id: number;
  headName: string;
  title: string;
  date: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'First blog',
    headName: 'first_blog',
    date: '14-Sep-2025',
    content: 'This is a test for the blog component.\
\nHere I will write about technical content and my opinions.\
\nI will update this blog as much as possible.'
  },
  {
    id: 3,
    title: 'Create a script for this blog',
    headName: 'post_script',
    date: '05-Oct-2025',
    content: 'Until now, this blog written directly into JSON files.\
\nHowever, that was a faff. Because it should have escape characters.\
\n\
\nTherefore, I created script to automatically generate JSON file from text files.\
\nIt was written in C++.\
\n\
\nText file format\
\nFile name -> Page header name\
\nFirst, describe the page data\
\n\
\n---\
\nID\
\nDate\
\nTitle\
\n---\
\n\
\nI had never used a file system library before,\
\nand handling “\\n” was difficult.\
\n\
\nI wish to add elements such as “title” and “table”.\
\nUltimately, I want to be able to write in Markdown format.'
  },
  {
    id: 4,
    title: 'Transitioned from `Create React App` to `Vite`',
    headName: 'vite',
    date: '19-Oct-2025',
    content: 'On February 14, 2025, `Create React App` was officially deprecated.\
\nI learnt about this from a comment on Qiita.\
\nI thank the person who told me.\
\n\
\nSo, I decided to migrate to `Vite`, a fast and modern build tool.\
\nI thought it would be complicated, but it turned out to be very simple.\
\n\
\nSo far, I haven’t encountered any issues.\
\n'
  },
  {
    id: 2,
    title: 'Added langton\'s ant',
    headName: 'langton',
    date: '04-Oct-2025',
    content: 'I added a new page about Langton\'s Ant.\
\nIt was my first time creating a program using JavaScript,\
\nand I learned a lot from it.\
\nIt was difficult to make it display quickly.\
\n\
\nI want to be able to change the speed and display size.\
\nI might also add the “Game of Life.”\
\nBut, I don\'t know how to change colour in touched grid;;\
\nI should have to learn more...'
  }
];
