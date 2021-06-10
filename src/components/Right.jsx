import React from 'react'
import Safe from './Safe'
import "../css/right.css"
import {BrowserRouter,Switch,Route,RedirecTo} from 'react-router-dom'
import MainClient from './MainClient'
import Clientrelevantview from './Clientrelevantview'
function App()
{
	return <div className="content">
		<Switch>
			<Safe>
				<Route exact path={["/","mainclient"]} component={MainClient} />
				<Route exact path="/clientrelevantview" component={Clientrelevantview} />
			</Safe>
		</Switch>
	</div>
}
export default App