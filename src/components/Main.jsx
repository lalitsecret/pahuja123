import React from 'react'
import App from './App'
import {Provider} from 'react-redux'
import store from './store'
function Main()
{
	return <div>
		<Provider store={store}>
			<App/>
		</Provider>
	</div>
}
export default Main