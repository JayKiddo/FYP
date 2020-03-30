import Link from 'next/link'
import {useState,useEffect} from 'react'
import Router from 'next/router'
import {getCookie,isLoggedIn} from '../../actions/handleCookie'
import {getProfile,updateProfile} from '../../actions/member'
import {API} from '../../config.js'


const ProfileUpdate = () => {
	const [values,setValues] = useState({
		username: '',
		name: '',
		email:'',
		password:'',
		error: false,
		success: false,
		photo:'',
		about:'',
		formData: '' 
	})	

	const token = getCookie('token')
	const {username,name,email,password,error,success,photo,formData,about} = values

	const loadMemberProfile = () => {
		getProfile(token).then(data=>{
			console.log(data)
			if(data.error)  {
				setValues({...values,error: data.error})
			} else { 
				setValues({...values,username: data.username,name: data.name,email: data.email,about: data.about,formData: new FormData()})
			}
		})
	}

	useEffect(()=>{
		loadMemberProfile()
	},[])

	const setData = () => {
		formData.set("username",username)
		formData.set("name",name)
		formData.set("email",email)
	}

	const handleSubmit = event => {
		event.preventDefault()
		setData()
		updateProfile(token,formData).then(data=>{
			if(data.error){
				setValues({...values,error: data.error,success: false})
			} else {
				setValues({...values,username: data.username,name: data.name,email: data.email,about: data.about, formData: new FormData(),success:true })
			}
		})
	}

	const handleChange = name => event => {
		const value = name === "photo" ? event.target.files[0] : event.target.value
		formData.set(name,value)
		setValues({...values,[name]:value,formData,error: false,success:false})
	}

	const showProfileForm = () => {
		return <form onSubmit={handleSubmit}>
			<div className="form-group">
				<label className="btn btn-outline-info">
					Profile Photo
	       			<input onChange={handleChange('photo')} type="file" accept="images/*" hidden/> 
	   			</label>
			</div>
			<div className="form-group">
				<label className="text-muted">Name</label>
				<input onChange={handleChange('name')} type="text" className="form-control" value={name}/>
			</div>
			<div className="form-group">
				<label className="text-muted">Username</label>
				<input onChange={handleChange('username')} type="text" className="form-control" value={username}/>
			</div>
			<div className="form-group">
				<label className="text-muted">Email</label>
				<input onChange={handleChange('email')} type="text" className="form-control" value={email}/>
			</div>
{/*			<div className="form-group">
				<label className="text-muted">Password</label>
				<input onChange={handleChange('password')} type="text" className="form-control"/>
			</div>*/}
			<div className="form-group">
				<label className="text-muted">About</label>
				<textarea onChange={handleChange('about')} type="text" className="form-control" value={about} />
			</div>
			<button  className="btn btn-primary">Submit</button>

		</form>
	}

	const showStatus = () => {
		if(error){
			return <div className="alert alert-danger pb-2 pt-2">{error}</div>
		} else if(success === true){
			return <div className="alert alert-success pb-2 pt-2">Updated Successfully</div>
		}
	}

	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<img 
							src={`${API}/member/photo/${username}`} 
							className="img img-fluid"
							style={{maxHeight: 'auto',maxWidth: '100%'}}
							alt="user profile picture"
						/>
					</div>
					<div className="col-md-8 mb-5">
						{showStatus()}
						{showProfileForm()}
					</div>
				</div>
			</div>
		</React.Fragment>
	)

}


export default ProfileUpdate

//make req to backend to get member info
//populated in form