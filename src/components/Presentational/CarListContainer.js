import React, { Component } from "react";
import Axios from "axios";
import CarListDisplay from './CarListDisplay';


export default class CarsListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			carList : []
		}
	}

	componentDidMount() {
		Axios.get('/api/cars_list').then(res => {
			console.log(res.data);
			this.setState({ carList: res.data });
		})
	}

	render() {
		return <CarListDisplay carList={this.state.carList} />;
	}
}
