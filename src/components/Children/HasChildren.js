import React, { Component } from "react";

export default class HasChildren extends Component {
	state = {
		test: "This is sample data"
	}
	render() {
		return this.props.children(this.state.test);
	}
}
