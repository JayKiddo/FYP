import Layout from '../../components/Layout';
import Admin from '../../components/Admin';
import AmendJournal from '../../components/Journal/AmendJournal';
import Link from 'next/link';

const JournalManage = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Manage Journals</h2>
                        </div>
                        <div className="col-md-6">
                            <AmendJournal/>
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default JournalManage;