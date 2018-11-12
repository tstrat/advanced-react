const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

let user = {
	id: 1,
	name: "josh",
	age: 30,
	favoriteColor: "green"
};

let carList = [
	{
		id: 1,
		make: "Tesla",
		model: "Roadster",
		year: 2015,
		mileage: "45,000",
		image:
			"https://images.hgmsites.net/med/2011-tesla-roadster-2-5_100327554_m.jpg"
	},
	{
		id: 2,
		make: "Ford",
		model: "Lightening",
		year: 2012,
		mileage: "135,400",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBccUbboURv28B-GUOErVEho0lxnOZPfFj0tvsA1ftSOIdorNS"
	},
	{
		id: 3,
		make: "Chevy",
		model: "Silverado",
		year: 2008,
		mileage: "215,000",
		image: "https://inventory-cf.assets-cdk.com/3/9/1/16656357193x640.jpg"
	},
	{
		id: 4,
		make: "Chevy",
		model: "Volt",
		year: 2018,
		mileage: "5,000",
		image:
			"https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2018/cars/volt/gallery/exterior/01-images/2018-volt-gal-ext-07.jpg?imwidth=650"
	},
	{
		id: 5,
		make: "Chrystler",
		model: "Sebring",
		year: 2006,
		mileage: "185,000",
		image:
			"https://www.cars.com/cstatic-images/car-pictures/xl/usb50cdc061c0101.png"
	},
	{
		id: 6,
		make: "Saturn",
		model: "S1",
		year: 1994,
		mileage: "340,000",
		image:
			"https://cdcssl.ibsrv.net/autodata/images/?IMG=U4STGEA1.jpg&width=390"
	}
];

app.route("/api/user_data").get((req, res) => {
	res.status(200).json(user);
});

app.route("/api/cars_list").get((req, res) => {
	res.status(200).json(carList);
});

app.route("/api/cars_list/:id").get((req, res) => {
	let car = carList.filter((car) => {
		return car.id === +req.params.id;
	});
	console.log(car);
	res.status(200).json(car[0]);
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
