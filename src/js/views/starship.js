import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Starship = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getStarship(params.theid);
	}, []);

    function imageError(e) {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }

	if (!store.currentStarship || !store.currentStarship.properties) {
		return <h2 className="text-center">Loading...</h2>; 
	}

	return (
		<div className="container" style={{paddingRight: '10%', paddingLeft: '10%'}}>
			<div className="row pb-4">
				<div className="col-4 d-flex justify-content-center">
                	<img onError={imageError} src={`https://starwars-visualguide.com/assets/img/starships/${params.theid}.jpg`} className="card-img-top" style={{ height: 'auto', width: '80%' }}/>
				</div>
				<div className="col-8 d-flex flex-column justify-content-center align-items-center">
					<h1>{store.currentStarship.properties.name}</h1>
					<h5><strong>{store.currentStarship.description}</strong></h5>
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
					<p>{store.currentStarship.properties.name}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Model</strong></h6>
					<p>{store.currentStarship.properties.model}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Starship Class</strong></h6>
					<p>{store.currentStarship.properties.starship_class}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Crew</strong></h6>
					<p>{store.currentStarship.properties.crew}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Passengers</strong></h6>
					<p>{store.currentStarship.properties.passengers}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Consumables</strong></h6>
					<p>{store.currentStarship.properties.consumables}</p>
				</div>
				
			</div>
		</div>
	);
};

export default Starship;
