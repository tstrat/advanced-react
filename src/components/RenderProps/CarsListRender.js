import React, { Component } from "react";

class CarsListDisplay extends Component {
	render() {
		const { make, model, year, image, mileage } = this.props.data;

		return (
			<div className="car">
				<h1>{make}</h1>
				<h2>{model}</h2>
				<div>{year}</div>
				<img src={image} />
				<div>Mileage: {mileage}</div>
			</div>
		);
	}
}

export default CarsListDisplay;
