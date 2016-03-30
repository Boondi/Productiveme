import React, {Component} from 'react';

export default class TaskSingle extends Component {

	toggleChecked (){

		Meteor.call('toggleTask', this.props.task);
	}
	deleteTask (){

		Meteor.call('deleteTask', this.props.task);
	}
	render (){
		const taskClass = this.props.task.complete ? "checked" : "";
		const status = this.props.task.complete ? <span className="completed"> Completed </span> : "";

		return (

			<li className = {taskClass} >
				<input type="checkbox"
						readOnly={true}
						checked={this.props.task.complete}
						onClick={this.toggleChecked.bind(this)} />
				{this.props.task.text}
				{status}
				<button className="btn-cancel"
					onClick={this.deleteTask.bind(this)} >
					&times;
				</button>
			</li>
			)
	}
}