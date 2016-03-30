import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import TasksWrapper from './tasks/TasksWrapper.jsx';
import About from './about.jsx';
import TaskDetail from './tasks/taskdetail.jsx';

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<TasksWrapper />)
		})
	}
});

FlowRouter.route('/about', {
	action() {
		mount(MainLayout, {
			content: (<About />)
		})
	}
});

FlowRouter.route('/tasks/:id', {
	action(params) {
		mount(MainLayout, {
			content: (<TaskDetail id={params.id} />)
		})
	}
});