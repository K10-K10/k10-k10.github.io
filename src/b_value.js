import React from "react";
import './App.css'

function R_value({ B, setb}) {

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


export default R_value;
