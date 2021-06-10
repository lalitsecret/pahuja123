import React from 'react'
class App extends React.Component
{
	state={status:true,msg:""}

	componentDidCatch(err,info)
	{
		this.setState({status:false,msg:JSON.stringify(err)})
	}
	render()
	{
		if(this.state.status)
		{
			return this.props.children
		}
		else
		{
			return <span>loading...</span>
		}
	}

}
export default App