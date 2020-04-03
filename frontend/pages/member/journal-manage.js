import Layout from '../../components/Layout';
import Member from '../../components/Member';
import ManageJournal from '../../components/Journal/ManageJournal';
import Link from 'next/link';
import {isLoggedIn} from '../../actions/handleCookie'

const JournalManage = () => {

    const username = isLoggedIn() && isLoggedIn().username
    const role = isLoggedIn() && isLoggedIn().role

    return (
        <Layout>
            <Member>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Manage Journals</h2>
                        </div>
                        <div className="col-md-6">
                            <ManageJournal username={username} role={role}/>
                        </div>
                    </div>
                </div>
            </Member>
        </Layout>
    );
};

export default JournalManage;