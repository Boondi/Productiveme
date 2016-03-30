import React, {Component} from 'react';

export default class About extends Component {

	setVar() {
		Session.set('Meteor.loginButtons.dropdownVisible', true);
	}

	render () {

		return (
			<div>
				<h1> About Us </h1>
				<p> You probably haven't heard of them tumblr mixtape, disrupt gentrify try-hard microdosing hammock pickled drinking vinegar lumbersexual four dollar toast flexitarian meh etsy. Brunch marfa bicycle rights bespoke. Stumptown knausgaard asymmetrical vice, messenger bag cred irony meditation schlitz godard pabst intelligentsia retro. Helvetica marfa viral bushwick, franzen cold-pressed hoodie banjo. Authentic offal +1 sustainable cred. Readymade PBR&B jean shorts etsy portland. Small batch trust fund yr poutine fingerstache. </p>
				<button onClick={this.setVar}> Sign Up</button>
			</div>
			)
	}
}