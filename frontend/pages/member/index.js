import Layout from '../../components/Layout'
import Member from '../../components/Member'
import Link from 'next/link'

const MemberDashboard = () => {
	return (
		<Layout>
			<h1>Hello Member</h1>
			<Member/>
		</Layout> 
	)
}

export default MemberDashboard;