import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Safe from './Safe'
import Left from './Left'
import {Link} from 'react-router-dom'
import {_get}  from '../utils/axios'
import '../css/mainclient.css'
function App()
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()

	let [a,seta]=React.useState([])
	const setCurrentProject=x=>{
		dispatch({type:"setCurrentProject",payload:x})
	}
	const logout=() =>{
		dispatch({type:"logout"})
	}
	const loadAll=() =>{
		_get("ProjectList?UserId=19")
		.then(res=>seta(res.Body))
	}
	
	React.useEffect(loadAll,[])

	return <div>
		<Safe>
			<Left>
				<div className="logo">
					<img  src={require("../images/logo-client.png")} alt=""/>
				</div>
				<div className="options">
					<div className="item">
						<Link to="/mainclient">
							<i className="fa fa-home"></i>
							<br/>
							<span>home</span>
						</Link>
					</div>
					<div className="profile">
						<Link to="/profile">
							<img width='50' height="50" src="https://i.stack.imgur.com/l60Hf.png" alt=""/>
							<br/>
							<span>ankit</span>
						</Link>
						<Link to="/login" onClick={logout}>
							<i className="fa fa-power-off"></i>
							<br/>
							<span>logout</span>
						</Link>
					</div>
					
				</div>
			</Left>
		</Safe>
		<div className="mainclient">
			
				<h1>Projects</h1>
				<div className="flex">
					{a.map(x=>
						<div className="item">
							{/*ImageType: "Png"
							ProjectID: 6
							ProjectImage: "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAB
							ProjectName: "Comprehensive Risk"*/}
							<img src={"data:image;base64,"+x.ProjectImage} alt=""/>
							<Link 
							 onClick={e=>setCurrentProject(x)}
							to={"/clientrelevantview/?project="+x.ProjectID}>
								{x.ProjectName}
							</Link>
						</div>
					)}

				</div>
			</div>
	</div>
}
export default App