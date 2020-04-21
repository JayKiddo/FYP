import Layout from '../components/Layout'
import Link from 'next/link'

const HomePage = () => {
	return (
		<Layout>
			<div className="text-center">
				<img 
					src="https://images.pexels.com/photos/3593865/pexels-photo-3593865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260c" 
					alt="Picture"
				/>
			</div>
		</Layout>
	)
}

export default HomePage