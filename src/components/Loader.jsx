import React from 'react'
import "../css/loader.css"
function App()
{
	return <div className="loader">
		<img width='300' src={require("../images/loader2.gif")} alt=""/>		
	</div>
}
export default App