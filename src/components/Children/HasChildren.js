import React, { Component } from "react";

export default class HasChildren extends Component {
	state = {
		test: "this is a test to show props.children working"
	};
	render() {
		return this.props.children(this.state.test);
	}
}
