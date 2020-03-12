import Layout from '../../components/Layout'
import Admin from '../../components/Admin'
import Link from 'next/link'

const AdminDashboard = () => {
	return (
		<Layout>			
			<Admin>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12 pt-5 pb-5"><h2>Admin Dashboard</h2></div>
						<div className="col-md-4">
						<ul className="list-group">
  							<li className="list-group-item">
	  							<Link href="/admin/category-tag">
	  								<a>Create Category</a>
	  							</Link>
  							</li>
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

						</ul>
						</div>
						<div className="col-md-8">right</div>
					</div>
				</div>
			</Admin>
		</Layout>
	)
}

export default AdminDashboard;