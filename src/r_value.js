import './App.css'

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


export default R_value;
