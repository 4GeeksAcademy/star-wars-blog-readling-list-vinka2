import React, {useEffect, useContext, useState} from "react";
import { Context } from "../store/appContext";
import Card from "../component/genericCard";
import "../../styles/home.css";
import { useSearchParams, useNavigate, Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context)

	let [nextPage, setNextPage] = useState(0)
	let navigate = useNavigate();
	useEffect(()=>{
		actions.getCharacters();
		actions.getFilms();
		actions.getPlanets();
		actions.getVehicles();
		actions.getStarships();
		actions.getSpecies();
	}, [])

	function generateCharacterText(data) {
		return (
			<div className="mb-0">
				<p>Gender: {data.gender}</p>
				<p>Hair Color: {data.hair_color}</p>
				<p>Eye-Color: {data.eye_color}</p>
			</div>
		)
	}

	function generatePlanetText(data) {
		return (
			<div className="mb-0">
				<p>Population: {data.population}</p>
				<p>Terrain: {data.terrain}</p>
				<p>Passengers: {data.climate}</p>
			</div>
		)
	}

	function generateVehicleText(data) {
		return (
			<div className="mb-0">
				<p>Model: {data.model}</p>
				<p>Vehicle class: {data.vehicle_class}</p>
				<p>Passengers: {data.passengers}</p>
			</div>
		)
	}

	function generateStarshipText(data) {
		return (
			<div className="mb-0">
				<p>Model: {data.model}</p>
				<p>Starship class: {data.starship_class}</p>
				<p>Passengers: {data.passengers}</p>
			</div>
		)
	}

	function generateSpecieText(data) {
		return (
			<div className="mb-0">
				<span>Classification: {data.classification}</span>
				<span>Average height: {data.average_height}</span>
				<span>Average Lifespan: {data.average_lifespan}</span>
			</div>
		)
	}

	return (
		<div>
			<div className="films" style={{marginRight: '10%', marginLeft: '10%'}}>
				<h1 className="text-danger">Films</h1>
				<div className="card-container gap-5 p-0">
					{store.films.map(film => <Card
						key={film.uid}
						title={film.properties.title}
						body={film.properties.opening_crawl}
						id={film.uid}
						type={"films"}
						width={"24rem"}
						imageHeight={"50%"}
					/>)}
				</div>
			</div>
			<div className="characters" style={{marginRight: '10%', marginLeft: '10%'}}>
				<h1 className="text-danger">Characters</h1>
				<div className="card-container gap-5 p-0">
					{store.characters.map(character => <Card
						key={character.uid}
						title={character.properties.name}
						body={generateCharacterText(character.properties)}
						id={character.uid}
						type={"characters"}
						width={"16rem"}
						imageHeight={"60%"}
					/>)}
				</div>
			</div>
			<div className="planets" style={{marginRight: '10%', marginLeft: '10%'}}>
				<h1 className="text-danger">Planets</h1>
				<div className="card-container gap-5 p-0">
					{store.planets.map(planet => <Card
						key={planet.uid}
						title={planet.properties.name}
						body={generatePlanetText(planet.properties)}
						id={planet.uid}
						type={"planets"}
						width={"16rem"}
						imageHeight={"40%"}
					/>)}
				</div>
			</div>
			<div className="vehicles" style={{marginRight: '10%', marginLeft: '10%'}}>
				<h1 className="text-danger">Vehicles</h1>
				<div className="card-container gap-5 p-0">
					{store.vehicles.map(vehicle => <Card
						key={vehicle.uid}
						title={vehicle.properties.name}
						body={generateVehicleText(vehicle.properties)}
						id={vehicle.uid}
						type={"vehicles"}
						width={"18rem"}
						imageHeight={"50%"}
					/>)}
				</div>
			</div>
			<div className="starships" style={{marginRight: '10%', marginLeft: '10%'}}>
				<h1 className="text-danger">Starships</h1>
				<div className="card-container gap-5 p-0">
					{store.starships.map(starship => <Card
						key={starship.uid}
						title={starship.properties.name}
						body={generateStarshipText(starship.properties)}
						id={starship.uid}
						type={"starships"}
						width={"18rem"}
						imageHeight={"50%"}
					/>)}
				</div>
			</div>
			<div className="species" style={{marginRight: '10%', marginLeft: '10%'}}>
				<h1 className="text-danger">Species</h1>
				<div className="card-container gap-5 p-0">
					{store.species.map(specie => <Card
						key={specie.uid}
						title={specie.properties.name}
						body={generateSpecieText(specie.properties)}
						id={specie.uid}
						type={"species"}
						width={"16rem"}
						imageHeight={"50%"}
					/>)}
				</div>
			</div>
		</div>
	)
};
