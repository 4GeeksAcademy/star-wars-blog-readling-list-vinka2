import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getPlanet(params.theid);
	}, []);

    function imageError(e) {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }

	if (!store.currentPlanet || !store.currentPlanet.properties) {
		return <h2 className="text-center">Loading...</h2>; 
	}

	return (
		<div className="container" style={{paddingRight: '10%', paddingLeft: '10%'}}>
			<div className="row pb-4">
				<div className="col-4 d-flex justify-content-center">
                	<img onError={imageError} src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`} className="card-img-top" style={{ height: 'auto', width: '80%' }}/>
				</div>
				<div className="col-8 d-flex flex-column justify-content-center align-items-center">
					<h1>{store.currentPlanet.properties.name}</h1>
					<h5><strong>{store.currentPlanet.description}</strong></h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est soluta ex voluptate. Nobis, corrupti! Blanditiis adipisci facilis quae ipsam placeat magni sint dolores, ex, iste non velit sed cumque unde.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est soluta ex voluptate. Nobis, corrupti! Blanditiis adipisci facilis quae ipsam placeat magni sint dolores, ex, iste non velit sed cumque unde.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est soluta ex voluptate. Nobis, corrupti! Blanditiis adipisci facilis quae ipsam placeat magni sint dolores, ex, iste non velit sed cumque unde.</p>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<hr style={{ color: "red", width: "100%", height: "10%" }} />
				</div>
			</div>
			<div className="row">
				<div className="col-2 text-center text-danger">
					<h6><strong>Name</strong></h6>
					<p>{store.currentPlanet.properties.name}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Climate</strong></h6>
					<p>{store.currentPlanet.properties.climate}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Population</strong></h6>
					<p>{store.currentPlanet.properties.population}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Orbital Period</strong></h6>
					<p>{store.currentPlanet.properties.orbital_period}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Rotation Period</strong></h6>
					<p>{store.currentPlanet.properties.rotation_period}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Diameter</strong></h6>
					<p>{store.currentPlanet.properties.diameter}</p>
				</div>		
			</div>
		</div>
	);
};

export default Planet;
