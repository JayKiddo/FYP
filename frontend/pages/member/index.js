import Layout from '../../components/Layout'
import Member from '../../components/Member'
import Link from 'next/link'

const MemberDashboard = () => {
	return (
		<Layout>
			<Member>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12 pt-5 pb-5">
							<h2>Member Dashboard</h2>
						</div>
						<div className="col-md-6">
							<ul className="list-group">

								<li className="list-group-item">
		  							<Link href="/member/update">
		  								<a>Update Profile</a>
		  							</Link>
	  							</li>

	  							<li className="list-group-item">
		  							<Link href="/member/journal">
		  								<a>Create Journal</a>
		  							</Link>
	  							</li>

	  							<li className="list-group-item">
		  							<Link href="/member/journal-manage">
		  								<a>Update/Delete Journal</a>
		  							</Link>
	  							</li>

							</ul>
						</div>
						<div className="col-md-6">
							right
						</div>
					</div>
				</div>
			</Member>
		</Layout> 
	)
}

export default MemberDashboard;