import Layout from '../../components/Layout'
import Admin from '../../components/Admin'
import Link from 'next/link'

const AdminDashboard = () => {
	return (
		<Layout>
			<h1>Hello Admin</h1>
			<Admin/>
		</Layout>
	)
}

export default AdminDashboard;