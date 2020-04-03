import Layout from '../../components/Layout'
import Admin from '../../components/Admin'
import Link from 'next/link'
import ProfileUpdate from '../../components/Profile/ProfileUpdate'

const AdminProfileUpdate = () => {
	return (
		<Layout>
			<Admin>
				<div className="container-fluid">
					<div className="row">
						<ProfileUpdate/> 
					</div>
				</div>
			</Admin>
		</Layout> 
	)
}

export default AdminProfileUpdate;