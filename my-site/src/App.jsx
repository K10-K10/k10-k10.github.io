function App() {
  return (
    <div>
      <h1>Hello, React from GitHub Pages!</h1>
    </div>
  );
}

function Top_Button() {
  return (
    <div>
      <button type="button" size="large" onClick={() => alert('test')}>test</button>
    </div>
  )
}
function Back_Button() {
  return (
    <div>
      <button type="button" size="large" onClick={() => alert('test')}>test</button>
    </div>
  );
}



export default App;
export { Top_Button, Back_Button, Tests };

