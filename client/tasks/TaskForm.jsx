import React, {Component} from 'react';

export default class TaskForm extends Component {

addTask(event){
		event.preventDefault();
		var text = this.refs.task.value.trim();
			if(text) {
				Meteor.call('addTask', text, (error, data)=>{
				if(error) {
					Bert.alert('please login first', 'danger' ,'fixed-top', 'fa-frown-o');
				} else {
					this.refs.task.value ="";
				}

			});


		}

	};
	render(){

		return (
			<form className="new-task" onSubmit={this.addTask.bind(this)}>
					<input
						type="text"
						ref="task"
						placeholder="Add a new task !!" />
				</form>
				)
	}
}
