import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

//Presentational / Container
import CarListContainer from "./components/Presentational/CarListContainer";
import StarWarsContainer from "./components/Presentational/StarWarsContainer";

// HOC's
import CarsList from "./components/HOC/CarsList";
import StarWars from "./components/HOC/StarWars";

// Render Props
import DataFetcher from "./components/RenderProps/DataFetcher";
import StarWarsRender from "./components/RenderProps/StarWarsRender";
import CarListRender from "./components/RenderProps/CarsListRender";

// Children

import Parent from "./components/Children/Parent";

import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 3
		};
	}

	changer = (val) => {
		this.setState({
			id: val
		});
	};

	render() {
		return (
			<div className="App">
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
				<div className="content">
					<Switch>
						{/* Presentational */}
						<Route
							path="/car_list_presentational"
							component={CarListContainer}
						/>
						<Route
							path="/starwars_presentational"
							component={StarWarsContainer}
						/>

						{/* HOC */}
						<Route path="/car_list" component={CarsList} />
						<Route path="/starwars" component={StarWars} />

						{/* Render Props */}
						<Route
							path="/starwars_renderprops"
							component={StarWarsRender}
						/>
						<Route
							path="/cars_list_renderprops"
							component={CarListRender}
						/>

						{/* Children */}

						<Route path="/testpath" component={Parent} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
