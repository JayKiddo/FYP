import Layout from '../components/Layout'
import Link from 'next/link'

const HomePage = () => {
	return (
		<Layout>
			<h1>Index</h1>
			<Link href="/login"><a>Log In</a></Link>
			<Link href="/register"><a>Register</a></Link>
		</Layout>
	)
}

export default HomePage