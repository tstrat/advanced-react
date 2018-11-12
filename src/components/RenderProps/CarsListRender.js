import React, { Component } from "react";

class CarsListRender extends Component {
	render() {
		const car = this.props.data;
		return (
			<div className="car">
				<div className='car' key={car.id}>
					<h1>Make: {car.make}</h1>
					<h2>Model: {car.model}</h2>
					<div>Year: {car.year}</div>
					<img src={car.image} alt="car"/>
					<div>Mileage: {car.mileage}</div>
				</div>
			</div>
		);
	}
}

export default CarsListRender;
