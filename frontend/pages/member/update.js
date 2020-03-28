import Layout from '../../components/Layout'
import Member from '../../components/Member'
import Link from 'next/link'
import ProfileUpdate from '../../components/Profile/ProfileUpdate'

const MemberProfileUpdate = () => {
	return (
		<Layout>
			<Member>
				<div className="container-fluid">
					<div className="row">
						<ProfileUpdate/> 
					</div>
				</div>
			</Member>
		</Layout> 
	)
}

export default MemberProfileUpdate;