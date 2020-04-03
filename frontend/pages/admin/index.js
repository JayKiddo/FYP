import Layout from '../../components/Layout'
import Admin from '../../components/Admin'
import Link from 'next/link'

const AdminDashboard = () => {
	return (
		<Layout>			
			<Admin>
				<div className="container-fluid">
					<div className="row text-center">
						<div className="col-md-12 pt-5 pb-5"><h2>Admin Dashboard</h2></div>
						<div className="col-md-6">
						<ul className="list-group">
							<li className="list-group-item">
	  							<Link href="/member">
	  								<a>View Profile</a>
	  							</Link>
  							</li>

  							<li className="list-group-item">
	  							<Link href="/admin/update">
	  								<a>Update Profile</a>
	  							</Link>
  							</li>

  							<li className="list-group-item">
	  							<Link href="/admin/category-tag">
	  								<a>Create Category</a>
	  							</Link>
  							</li>
  							

						</ul>
						</div>
						<div className="col-md-6">
							<li className="list-group-item">
	  							<Link href="/admin/category-tag">
	  								<a>Create Tag</a>
	  							</Link>
  							</li>
  							<li className="list-group-item">
	  							<Link href="/admin/journal">
	  								<a>Create Journal</a>
	  							</Link>
  							</li>

  							<li className="list-group-item">
	  							<Link href="/admin/journal-manage">
	  								<a>Update/Delete Journal</a>
	  							</Link>
  							</li>
						</div>
					</div>
				</div>
			</Admin>
		</Layout>
	)
}

export default AdminDashboard;