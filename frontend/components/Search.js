import {useState} from 'react'
import {listSearch} from '../actions/journal'
import queryString from 'query-string'
import Link from 'next/link'

const Search = () => {

	const [values,setValues] = useState({
		search: undefined,
		result: [],
		searched: false,
		message: ""
	})

	const {search,result,searched,message} = values

	const handleSubmit = event => {
		event.preventDefault()
		listSearch({search}).then(data=>{
		console.log(data)
			setValues({...values,result: data, searched: true, message: `${data.length} journals found` })
		console.log(result)	
		})
	}


	const handleChange = event => {
		setValues({...values,search: event.target.value,searched: false,result: []})
	}

	const searchedJournals = result => {

		return ( 
			<div className="jumbotron bg-white">
				<div className="pt-4 text-muted font-italic">{message}</div>
				{result.map((journal,index)=>{
					return (
						<div key={index}>
							<Link href={`/journals/${journal.slug}`}>
								<a>{journal.title}</a>
							</Link>
						</div>
					)
				})}
			</div>
			)
	}

	const showSearchBar = () => {
		return <form onSubmit={handleSubmit}>
			<div className="row">
				<div className="col-md-8">
					<input type="search" className="form-control" placeholder="Search for journals here" onChange={handleChange}/>
				</div>

				<div className="col-md-4">
					<button className="btn btn-block btn-outline-primary" type="submit">Search</button>
				</div>

			</div>
		</form>
	}	

	return (
		<div className="container-fluid">
			<div className="pt-3 pb-5">
				{showSearchBar()}
				{searched && <div style={{marginTop: '-70px',marginBottom: '-120px'}}>{searchedJournals(result)}</div>}
			</div>

		</div>
	)

}

export default Search;

