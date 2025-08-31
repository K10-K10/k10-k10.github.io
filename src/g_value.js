import React from "react";
import './App.css'

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


export default G_value;
