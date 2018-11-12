import React, { Component } from "react";

class StarWars extends Component {
	render() {
		const { name, height, mass } = this.props.data;
		return (
			<div className="star-wars-char">
				<span>name: {name}</span>
				<span>height: {height}</span>
				<span>mass: {mass}</span>
			</div>
		);
	}
}
export default StarWars;
