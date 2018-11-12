import React, { Component } from "react";
import axios from "axios";
import StarWarsDisplay from './StarWarsDisplay';

export default class CharacterListContainer extends Component {
	constructor() {
		super();
		this.state = {
			characters : []
		}
	}

	componentDidMount() {
		axios.get(`https://swapi.co/api/people`).then(res => {
			this.setState({ characters: res.data.results });
		})
	}

	render() {
		return <StarWarsDisplay characters={this.state.characters}/>;
	}
}
