import './../App.css'

function G_value({ G, setG}) {

	if(G > 255){setG(G = 255)}
	if(G < 0){setG(G = 0)}
	return (
    <div>
      G: {G}
			<button id="G_plus" onClick={()=>setG(G + 5)}>G + 5</button>
			<button id="G_minus" onClick={()=>setG(G - 5)}>G - 5</button>
		</div>
  );
}
function R_value({ R, setR}) {

	if(R > 255){setR(R = 255)}
	if(R < 0){setR(R = 0)}
	return (
    <div>
      R: {R}
			<button id="R_plus" onClick={()=>setR(R + 5)}>R + 5</button>
			<button id="R_minus" onClick={()=>setR(R - 5)}>R - 5</button>
		</div>
  );
}

function B_value({ B, setb}) {

	if(B > 255){setb(B = 255)}
	if(B < 0){setb(B = 0)}
	return (
    <div>
      B: {B}
			<button id="R_plus" onClick={()=>setb(B + 5)}>B + 5</button>
			<button id="R_minus" onClick={()=>setb(B - 5)}>B - 5</button>
		</div>
  );
}

export  {R_value,G_value, B_value};
