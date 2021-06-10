import axios from 'axios'
const base="https://stagingapisda.azurewebsites.net/api"
// https://stagingapisda.azurewebsites.net/api/ProjectList?UserId=
let token="QiVDkdYOy7uxLuTAPIusNnLHs8auUwSIM5ozXFs3GdinzD2l_s2ANUtKZsJMR9qlMhRDZxcyuviAFwa3mvGa50Pur_p415wBuQaRwN7SMPuxML0jMR4ap1ZqXBrj4ZHmNBG8EMXCtv2wiIqxDsfGh2IvJLKU3c1JRaazujVDH3JG3l_DkEqBtF4vCgtkh9AkdrJRrN2QaztUC4rXb84yG_72YnqF-CKbP9w3HyTm6qjJKtU7pLefiBXn3NDeUf_FsTTp0za6LU8v8mkMJDRSqHBwy7HQHslhx_agG6VVs-NwSpNCB9RGebm7r634lThisZw6FQsGUHpG4On6MPzEuuR1CGlZ-YIGIdzQ125L3Z4"
export function _get(str)
{
	const headers={
				'Content-Type':'application/json',
				"Authorization":"bearer " + token
		}
	return axios.get(`${base}/${str}`,{headers}).then(res=>{
		console.log(res.data.Body)
		return res.data
	})
}