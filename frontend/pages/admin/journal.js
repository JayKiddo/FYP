import Layout from '../../components/Layout';
import Admin from '../../components/Admin';
import CreateJournal from '../../components/Journal/CreateJournal';
import Link from 'next/link';

const Journal = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Create a new journal</h2>
                        </div>
                        <div className="col-md-12">
                            <CreateJournal />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default Journal;