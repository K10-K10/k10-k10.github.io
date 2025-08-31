import { useState, useRef, useEffect } from 'react';
import './../App.css';
import {R_value,G_value,B_value} from './rgb_values.js';

function RGB() {
  const [R, setR] = useState(0);
  const [G, setG] = useState(0);
  const [B, setB] = useState(0);

  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.fillStyle = `rgb(${R},${G},${B})`;
      ctx.fillRect(0, 0, 100, 100);
    }
  }, [R, G, B]);

  return (
    <div className="App">
      <h1>RGB & react checker</h1>
      <R_value R={R} setR={setR}/>
      <G_value G={G} setG={setG}/>
      <B_value B={B} setb={setB}/>
      <canvas id="myCanvas" ref={canvasRef} width={200} height={200} />
    </div>
  );
}


export default RGB;
