import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Left from './Left'
import Right from './Right'
import Bottom from './Bottom'
import Safe from './Safe'
function App()
{
	return <BrowserRouter>
			<Safe><Left></Left></Safe>
			<Safe><Right/></Safe>
			<Safe><Bottom/></Safe>
	</BrowserRouter>
}
export default App