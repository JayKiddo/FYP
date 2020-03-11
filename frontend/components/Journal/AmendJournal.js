import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { withRouter } from 'next/router'; //use router,export component with router
import { getCookie, isLoggedIn } from '../../actions/handleCookie';
import { listJournalForManage,deleteJournal,updateJournal } from '../../actions/journal';

const AmendJournal = () => {
	return (
		<p>Manage Journals</p>
	)
}

export default AmendJournal