// ProjectID: 6
// ProjectImage: "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAB
// ProjectName: "Comprehensive Risk

// url1=https://stagingapisda.azurewebsites.net/api/ThemeVsEventList?projectId=" + project



import React from 'react'
import Safe from './Safe'
import Drawer from './Drawer'
import Left from './Left'
import Loader from './Loader'
import {Link} from 'react-router-dom'
import {_get}  from '../utils/axios'
import {useSelector,useDispatch} from 'react-redux'
import '../css/clientrelevantview.css'
function App()
{
	const [status,setstatus]=React.useState(false)
	let headers=["S.No.", "Target Entity", "Heading", "Date", "Relevance", "Source", "Theme", "Sentiment", "Info", ]
	let cols=["id","TargetedEntity"]
	const viewbio=x=>{

	}
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	let [a,seta]=React.useState([])
	let [start,setstart]=React.useState(0)
	let [pp,setpp]=React.useState(10)

	const cell1=() =>{

	}
	const cell2=(row) =>{
		let str1
		let str2
		if(row && row.Grouping)
		{
			str1= row.Grouping.map(x=><li class="sublist-main-div">
			<a href={x.Link} target="_blank">{x.Heading}</a>
				<div>
					<span>{x.NewsProvider}</span>
					<span>{x.DatePublished}</span>
				</div> 
			</li>
				)
		}
		
	}
	const cell3=() =>{

	}
	const cell4=() =>{

	}
	const cell5=() =>{

	}
	const cell6=() =>{

	}
	const cell7=() =>{

	}
	const cell8=() =>{

	}
	const cell9=() =>{

	}
	


	const logout=() =>{
		dispatch({type:"logout"})
	}

	const loadAll=() =>{
		// _get("ThemeVsEventList?projectId="+6)
		alert("loading")
		_get("AdminReleventNewsGrouping?projectId=6")
		.then(d=>d.Body.slice(0,10))
		.then(d=>JSON.stringify(d))
		.then(d=>document.write(d))
	}
			
	// React.useEffect(loadAll,[])
	function abc(e)
	{
		// alert(e.code)
		if(e.code==="Escape")
		{
			setstatus(false)
		}
		if(e.code==="Enter")
		{
			setstatus(true)
		}
	}

	const lkj=() =>{
		window.addEventListener("keyup",abc)
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
						<a onClick={logout}>
							<i className="fa fa-power-off"></i>
							<br/>
							<span>logout</span>
						</a>
					</div>
					
				</div>
			</Left>
		</Safe>
		<div className="clientrelevantview">
			<div className="filters">
				<div className="flex1">
					<div className="item">
						<div className="search">
							<i className="fa fa-search"></i>
							<input placeholder="search.."  />
						</div>
						<i className="fa fa-refresh"></i>
					</div>
					<div className="item">
						<input type="date" />
						<input type="date" />
						<button><i className="fa fa-arrow-right"></i></button>
					</div>
				</div>
				<div className="flex2">
					<div className="item">
						<input placeholder="select theme" />
						<input placeholder="select Event" />
						<button>Submit</button>
					</div>
				</div>
				<div className="flex3">
					<div className="item">
						<input placeholder="Target Enitity" />
						<input placeholder="Sentiment" />
						<input placeholder="Source" />
					</div>
					<div className="item">
						<button>download</button>
					</div>
					
				</div>
				
			</div>			
			<div className="table">
				<table cellPadding={5} cellSpacing={0}>
					<thead>
						<tr>
							{headers.map(x=>
								<th>
									{x}
									{" "}
									{
										true
										?
										<i className="fa fa-sort-up"></i>
										:
										<i className="fa fa-sort-down"></i>
									}
								</th>
							)}
						</tr>
					</thead>
					<tbody>
						{a.length===0?a.slice(start,start+pp).map((x,i) =>
							<tr>
								<td>{i+1}</td>
								<td>
									<a href="" onClick={e=>viewbio(x.TargetedEntity)}>
										{x.TargetedEntity}
									</a>
								</td>
								<td>
									{cell2(x)}
								</td>
							</tr>
						):<Loader/>}
					</tbody>
				</table>
			</div>			
		</div>
		<Drawer open={status}>
			hello drawer
		</Drawer>
	</div>
}
export default App