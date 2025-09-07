import "./Fieldset.css"

function Fieldset ({children, legend}) {
	return (
		<fieldset><legend>{legend}</legend>{children}</fieldset>
	)
}

export default Fieldset
