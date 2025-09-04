import { useState, useRef, useEffect } from 'react';
import './RGB.css';

function RGB() {
	const [R, setR] = useState(0);
	const [G, setG] = useState(0);
	const [B, setB] = useState(0);
	if (R > 255) { setR(255) };
	if (R < 0) { setR(0)};
	if (G > 255) { setG(255) };
	if (G < 0) { setG(0) };
	if (B > 255) { setB(255) };
	if (B < 0) { setB(0) };

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
			<h1>RGB checker</h1>
			<div>
				<p className="RGB">R: {R}</p>
				<button id="R_plus" className="RGB_button" onClick={() => setR(R + 5)}>R + 5</button>
				<button id="R_minus" className="RGB_button" onClick={() => setR(R - 5)}>R - 5</button>
			</div>
			<div>
				<p className="RGB">G: {G}</p>
				<button id="G_plus" className="RGB_button" onClick={() => setG(G + 5)}>G + 5</button>
				<button id="G_minus" className="RGB_button" onClick={() => setG(G - 5)}>G - 5</button>
			</div>
			<div>
				<p className="RGB">B: {B}</p>
				<button id="R_plus" className="RGB_button" onClick={() => setB(B + 5)}>B + 5</button>
				<button id="R_minus" className="RGB_button" onClick={() => setB(B - 5)}>B - 5</button>
			</div>

			<canvas id="myCanvas" ref={canvasRef} width={100} height={100} />
		</div>
	);
}

export default RGB;
