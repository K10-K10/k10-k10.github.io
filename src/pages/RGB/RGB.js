import { useState, useRef, useEffect } from 'react';
import './RGB.css'

function R_value({ R, setR }) {
	if (R > 255) { setR(R = 255) }
	if (R < 0) { setR(R = 0) }
	return (
		<div>
			<p className="RGB">R: {R}</p>
			<button id="R_plus" className="RGB_button" onClick={() => setR(R + 5)}>R + 5</button>
			<button id="R_minus" className="RGB_button" onClick={() => setR(R - 5)}>R - 5</button>
		</div>
	);
}

function G_value({ G, setG }) {
	if (G > 255) { setG(G = 255) }
	if (G < 0) { setG(G = 0) }
	return (
		<div>
			<p className="RGB">G: {G}</p>
			<button id="G_plus" className="RGB_button" onClick={() => setG(G + 5)}>G + 5</button>
			<button id="G_minus" className="RGB_button" onClick={() => setG(G - 5)}>G - 5</button>
		</div>
	);
}

function B_value({ B, setb }) {
	if (B > 255) { setb(B = 255) }
	if (B < 0) { setb(B = 0) }
	return (
		<div>
			<p className="RGB">B: {B}</p>
			<button id="R_plus" className="RGB_button" onClick={() => setb(B + 5)}>B + 5</button>
			<button id="R_minus" className="RGB_button" onClick={() => setb(B - 5)}>B - 5</button>
		</div>
	);
}



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
		<div>
			<h1>RGB & react checker</h1>
			<R_value R={R} setR={setR}/>
			<G_value G={G} setG={setG}/>
			<B_value B={B} setb={setB}/>

			<canvas id="myCanvas" ref={canvasRef} width={100} height={100} />
		</div>
	);
}

export default RGB;
