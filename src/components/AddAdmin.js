import React from 'react';

import Sidebar from './Sidebar';
import Content from './Content';
import ToggleSidebar from './ToggleSidebar';
import FlashMessagesList from './FlashMessagesList';
import AddAdminForm from './AddAdminForm';

const AddAdmin = () => {
	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<div className="page-header block">
					<ToggleSidebar />
					<h2>Add new admin</h2>
				</div>
				<FlashMessagesList />
				<AddAdminForm />
			</Content>
		</div>
	);
};

export default AddAdmin;