Tasks = new Mongo.Collection("tasks");

Meteor.publish("allTasks", function () {
	return Tasks.find();
});

Meteor.publish("userTasks", function () {
	return Tasks.find({user: this.userId});
});