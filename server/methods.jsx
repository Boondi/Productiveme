Meteor.methods({
	addTask(task) {
		check(task, String);
		if(!Meteor.userId()) {
			throw new Meteor.Error('not authorized');
		};
		// add tasks
		Tasks.insert({
			text: task,
			complete: false,
			createdAt: new Date(),
			user: Meteor.userId()
		});
	},
	toggleTask(task) {
		if(Meteor.userId() !== task.user) {
			throw new Meteor.Error('not authorized');
		};
		Tasks.update(task._id, {
			$set: {complete: !task.complete}
		});
	},
	deleteTask(task) {
		if(Meteor.userId() !== task.user) {
			throw new Meteor.Error('not authorized');
		};
		Tasks.remove(task._id);
	}
});