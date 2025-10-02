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

	const antXRef = useRef(Math.floor(SIZE / 2));
	const antYRef = useRef(Math.floor(SIZE / 2));
	const directionRef = useRef(0); // 0=Up,1=Right,2=Down,3=Left

	const [isRunning, setIsRunning] = useState(false);
	const [_, setTick] = useState(0);

	function reset() {
		gridRef.current = Array.from({ length: SIZE }, () => Array(SIZE).fill(false));

		antXRef.current = Math.floor(SIZE / 2);
		antYRef.current = Math.floor(SIZE / 2);
		directionRef.current = 0;

		const ctx = canvasRef.current.getContext("2d");
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, SIZE * CELL, SIZE * CELL);

		ctx.fillStyle = "red";
		ctx.fillRect(antXRef.current * CELL, antYRef.current * CELL, CELL, CELL);
	}

	function step() {
		const ctx = canvasRef.current.getContext("2d");
		const grid = gridRef.current;

		let x = antXRef.current;
		let y = antYRef.current;
		let d = directionRef.current;

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
		}

		ctx.fillStyle = "red";
		ctx.fillRect(x * CELL, y * CELL, CELL, CELL);

		antXRef.current = x;
		antYRef.current = y;
		directionRef.current = d;

		setTick(t => t + 1);
	}

	useEffect(() => {
		if (!isRunning) return;

		const interval = setInterval(step, 20);
		return () => clearInterval(interval);
	}, [isRunning]);

	useEffect(() => {
		reset();
	}, []);

	return (
		<div className="ants">
			<Head title={"Langton's ant"} link_title={"Langton's ant simulator"} />
			<h1 className="ants-title">Langton's ant</h1>
			<canvas
				className="ants-canvas"
				ref={canvasRef}
				width={SIZE * CELL}
				height={SIZE * CELL}
				style={{ border: "1px solid black" }}
			/>
			<div className="ants-controls" style={{ marginTop: "10px" }}>
				<Button onClick={reset}>Reset</Button>
				<Button onClick={step}>Step</Button>
				<Button onClick={() => setIsRunning(!isRunning)}>
					{isRunning ? "Stop" : "Start"}
				</Button>
			</div>
			<p className="ants-position">
				Ant Position: ({antXRef.current}, {antYRef.current}), Direction: {directionRef.current}
			</p>
		</div>
	);
}

export default Ants;
