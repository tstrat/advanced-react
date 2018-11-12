import React, { Component } from "react";

class CarsListDisplay extends Component {
	render() {
		const carList = this.props.carList.map((car, i) => {
			return (
				<div className='car' key={car.id}>
					<h1>Make: {car.make}</h1>
					<h2>Model: {car.model}</h2>
					<div>Year: {car.year}</div>
					<img src={car.image} alt="car"/>
					<div>Mileage: {car.mileage}</div>
				</div>
			)
		})
		return <div className="carlist-container">{carList}</div>;
	}
}

export default CarsListDisplay;
