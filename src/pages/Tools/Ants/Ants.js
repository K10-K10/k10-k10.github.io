import { useState, useRef, useEffect } from "react";
import './Ants.css';
import Head from '@layouts/Head/Head';

import Button from '@parts/Button';

const SIZE = 100;
const CELL = 5;

function Ants() {
	const canvasRef = useRef(null);
	const gridRef = useRef(
		Array.from({ length: SIZE }, () => Array(SIZE).fill(false))
	);

	const [antX, setAntX] = useState(Math.floor(SIZE / 2));
	const [antY, setAntY] = useState(Math.floor(SIZE / 2));
	const [direction, setDirection] = useState(0); // 0=Up,1=Right,2=Down,3=Left

	function reset() {
		gridRef.current = Array.from({ length: SIZE }, () => Array(SIZE).fill(false));
		const startX = Math.floor(SIZE / 2);
		const startY = Math.floor(SIZE / 2);
		setAntX(startX);
		setAntY(startY);
		setDirection(0);

		const ctx = canvasRef.current.getContext("2d");
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, SIZE * CELL, SIZE * CELL);

		ctx.fillStyle = "red";
		ctx.fillRect(startX * CELL, startY * CELL, CELL, CELL);
	}

	function step() {
		const ctx = canvasRef.current.getContext("2d");
		const grid = gridRef.current;
		let d = direction;
		let x = antX;
		let y = antY;

		if (grid[y][x]) {
			d = (d + 3) % 4;
			grid[y][x] = false;
			ctx.fillStyle = "white";
		} else {
			d = (d + 1) % 4;
			grid[y][x] = true;
			ctx.fillStyle = "black";
		}
		ctx.fillRect(x * CELL, y * CELL, CELL, CELL);

		switch (d) {
			case 0: y = (y - 1 + SIZE) % SIZE; break;
			case 1: x = (x + 1) % SIZE; break;
			case 2: y = (y + 1) % SIZE; break;
			case 3: x = (x - 1 + SIZE) % SIZE; break;
			default: break;
		}

		ctx.fillStyle = "red";
		ctx.fillRect(x * CELL, y * CELL, CELL, CELL);

		setAntX(x);
		setAntY(y);
		setDirection(d);
	}

	useEffect(() => {
		reset();
	}, []);

	return (
		<div className="ants">
			<Head title={"Langton's ant"} link_title={"Langton's ant simulator"} />
			<h1 className="ants-title">Langton's ant</h1>
			<canvas className="ants-canvas"
				ref={canvasRef}
				width={SIZE * CELL}
				height={SIZE * CELL}
				style={{ border: "1px solid black" }}
			/>
			<div className="ants-controls">
				<Button onClick={reset}>Reset</Button>
				<Button onClick={step}>Step</Button>
			</div>
			<p className="ants-position">Ant Position: ({antX}, {antY}), Direction: {direction}</p>
		</div>
	);
}

export default Ants;
