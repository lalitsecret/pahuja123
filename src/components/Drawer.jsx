import React from 'react'
import "../css/drawer.css"
function App(props)
{
	
	return <div className={props.open?"drawer active":"drawer"}>
		{props.children}
	</div>
}
export default App