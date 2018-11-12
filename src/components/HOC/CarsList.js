import React, { Component } from "react";
import myHOC from './myHOC';
class CarsList extends Component {
	
	render() {
		const carList = this.props.data.map((car, i) => {
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
		return <div className="carlist-container">
			{carList}
		</div>;
	}
}

export default myHOC(CarsList, '/api/cars_list');
