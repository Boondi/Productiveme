import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import TaskForm from './TaskForm.jsx';
import TaskSingle from './TaskSingle.jsx';


Tasks = new Mongo.Collection("tasks");


export default class TasksWrapper extends TrackerReact(React.Component) {
	constructor(){
		super();

		this.state = {
			subscription: {
				tasks: Meteor.subscribe("userTasks")
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.tasks.stop()
	};

//get tasks from db //
	tasks(){
		return Tasks.find().fetch();
	}


	render() {


		return (
			<div>
				<h2>Tasks</h2>
					<TaskForm/>

				<ReactCSSTransitionGroup
					component='ul'
					className="tasks"
					transitionName= "taskLoad"
					transitionEnterTimeout={600}
					transitionLeaveTimeout={400}>
					{this.tasks().map( (task)=>{
						return <TaskSingle key ={task._id} task={task} />
					})}

				</ReactCSSTransitionGroup>

			</div>
			)
	}
};

