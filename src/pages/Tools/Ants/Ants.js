import { useState, useRef, useEffect } from 'react';
import './Ants.css';
import Head from '@layouts/Head/Head';

import Button from '@parts/Button';

function Ant() {
	const [direction, setDirection] = useState(0);//U:0, R:1, D:2, L:3
	const [ant_y, setant_y] = useState(0);
	const [ant_x, setant_x] = useState(0);
	const [is_move, setIs_Move] = useState(false);

	const [grid_colour, setGrid_colour] = useState(
		Array.from({ length: 21 }, () => Array(21).fill(false))
	);


	function ant_begin() {
		const newGrid = Array.from({ length: 21 }, () => Array(21).fill(false));

		setDirection(0);
		setant_y(10);
		setant_x(10);
		setGrid_colour(newGrid);
	}

	function ant_next() {
		const newGrid = grid_colour.map(row => [...row]);

		let newDirection = direction;
		if (newGrid[ant_y][ant_x]) {
			newGrid[ant_y][ant_x] = false;
			newDirection = (direction + 3) % 4;
		} else {
			newGrid[ant_y][ant_x] = true;
			newDirection = (direction + 1) % 4;
		}

		let newX = ant_y;
		let newY = ant_x;

		switch (newDirection) {
			case 0:
				newY -= 1;
				break;
			case 1:
				newX += 1;
				break;
			case 2:
				newY += 1;
				break;
			case 3:
				newX -= 1;
				break;
			default:
				break;
		}

		newX = (newX + 21) % 21;
		newY = (newY + 21) % 21;

		setGrid_colour(newGrid);
		setant_y(newX);
		setant_x(newY);
		setDirection(newDirection);
	}

	return (
		<div className="ants">
			<Head title={"Langton's ant"} link_title={"Langton's ant simulator"} />
			<h1>Langton's ant</h1>
			<div className="ants_grid">
				<table>
					<tbody>
						{grid_colour.map((row, y) => (
							<tr key={y}>
								{row.map((cell, x) => (
									<td
										key={x}
										style={{
											width: "20px",
											height: "20px",
											backgroundColor:
												x === ant_x && y === ant_y
													? "red"
													: cell
														? "black"
														: "white",
											border: "1px solid #ccc",
										}}
									/>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="ants_cmds">
				{/*<Button onClick={ant_begin}>Back</Button>*/}
				<p className="ants_position">{ant_y} {ant_x}</p>
				<Button onClick={ant_begin}>Reset</Button>
				<Button onClick={() => setIs_Move(true)} style={{ width: "100px" }}>start</Button>
				<Button onClick={ant_next}>check</Button>
			</div>
		</div>
	)
}

export default Ant;

