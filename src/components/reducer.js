const intialState={

}
function reducer(state=intialState,action)
{
	switch(action.type)
	{
		case "setCurrentProject":
			return {...state,...action.payload}
		default:
			return state
	}
}
export default reducer 