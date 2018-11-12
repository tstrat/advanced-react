import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
	render() {
		return (
			<header>
				{/* Presentational */}
				<Link to="/car_list_presentational">Cars List(p/c)</Link>
				<Link to="/starwars_presentational">Star Wars(p/c)</Link>

				{/* HOC */}
				<Link to="/car_list">Cars List(hoc)</Link>
				<Link to="/starwars">Star Wars(hoc)</Link>

				{/* Render Props */}
				<Link to="/cars_list_renderprops">Cars List(render)</Link>
				<Link to="/starwars_renderprops">Star Wars(render)</Link>
			</header>
		);
	}
}
