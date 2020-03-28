import Link from 'next/link'
import {useState,useEffect} from 'react'
import Router from 'next/router'
import {getCookie,isLoggedIn} from '../../actions/handleCookie'
import {getProfile,updateProfile} from '../../actions/member'


const ProfileUpdate = () => {
	const [values,setValues] = useState({
		username: '',
		name: '',
		email:'',
		password:'',
		error: false,
		success: false,
		loading: false,
		photo:'',
		formData: '' 
	})	

	const token = getCookie('token')
	const {username,name,email,password,error,success,loading,photo,formData} = values

	const loadMemberProfile = () => {
		getProfile(token).then(data=>{
			console.log(data)
			if(data.error)  {
				setValues({...values,error: data.error})
			} else {
				setValues({...values,username: data.username,name: data.name,email: data.email,})
			}

		})
	}

	useEffect(()=>{
		loadMemberProfile()
	},[])

	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						image
					</div>
					<div className="col-md-8">
						{JSON.stringify({username,email,name})}
					</div>
				</div>
			</div>
		</React.Fragment>
	)

}


export default ProfileUpdate

//make req to backend to get member info
//populated in form