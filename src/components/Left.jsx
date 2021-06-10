import React from 'react'
import "../css/left.css"
function App(props)
{
	return <div className="sidebar">
		{props.children}
	</div>
}
export default App