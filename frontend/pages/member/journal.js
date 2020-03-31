import Layout from '../../components/Layout';
import Member from '../../components/Member';
import CreateJournal from '../../components/Journal/CreateJournal';
import Link from 'next/link';

const JournalCreate = () => {
    return (
        <Layout>
            <Member>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Create a new journal</h2>
                        </div>
                        <div className="col-md-6">
                            <CreateJournal />
                        </div>
                    </div>
                </div>
            </Member>
        </Layout>
    );
};

export default JournalCreate;