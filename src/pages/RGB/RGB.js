import { useState, useRef, useEffect } from 'react';
import './RGB.css';
import Button from "./../../components/Button/Button"

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
		<div id="RGB">
			<h1>RGB checker</h1>
			<div>
				<p className="RGB">R: {R}</p>
				<Button children={"R + 5"} onClick={() => setR(R + 5)} />
				<Button children={"R - 5"} onClick={() => setR(R - 5)} />
			</div>
			<div>
				<p className="RGB">G: {G}</p>
				<Button children={"G + 5"} onClick={() => setG(G + 5)} />
				<Button children={"G - 5"} onClick={() => setG(G - 5)} />
			</div>
			<div>
				<p className="RGB">B: {B}</p>
				<Button children={"B + 5"} onClick={() => setB(B + 5)} />
				<Button children={"B - 5"} onClick={() => setB(B - 5)} />
			</div>
			<canvas id="myCanvas" ref={canvasRef} width={100} height={100} />
		</div>
	);
}

export default RGB;
