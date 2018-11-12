import React, { Component } from "react";

class StarWars extends Component {
	render() {
		const character = this.props.data;
			return (
				<div className='star-wars-char' key={character.name}>
					<span>name: {character.name}</span>
					<span>height: {character.height}</span>
					<span>mass: {character.mass}</span>
				</div>
			)
	};
	
}
export default StarWars;
