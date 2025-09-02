import './rgb_values.css'

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

export { R_value, G_value, B_value };
