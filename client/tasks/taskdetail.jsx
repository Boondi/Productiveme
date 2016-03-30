import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class TaskDetail extends Component {

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
	}


	task(){
		return Tasks.findOne(this.props.id);
	}

	render() {

		console.log(this.task());


		return (
			<div>
				<h1> Hi </h1>

			</div>
			)
	}
}