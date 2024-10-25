import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicle = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getVehicle(params.theid);
	}, []);

    function imageError(e) {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }

	if (!store.currentVehicle || !store.currentVehicle.properties) {
		return <h2 className="text-center">Loading...</h2>; 
	}

	return (
		<div className="container" style={{paddingRight: '10%', paddingLeft: '10%'}}>
			<div className="row pb-4">
				<div className="col-4 d-flex justify-content-center">
                	<img onError={imageError} src={`https://starwars-visualguide.com/assets/img/vehicles/${params.theid}.jpg`} className="card-img-top" style={{ height: 'auto', width: '80%' }}/>
				</div>
				<div className="col-8 d-flex flex-column justify-content-center align-items-center">
					<h1>{store.currentVehicle.properties.name}</h1>
					<h5><strong>{store.currentVehicle.description}</strong></h5>
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
					<p>{store.currentVehicle.properties.name}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Model</strong></h6>
					<p>{store.currentVehicle.properties.model}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Vehicle Class</strong></h6>
					<p>{store.currentVehicle.properties.vehicle_class}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Crew</strong></h6>
					<p>{store.currentVehicle.properties.crew}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Passengers</strong></h6>
					<p>{store.currentVehicle.properties.passengers}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Consumables</strong></h6>
					<p>{store.currentVehicle.properties.consumables}</p>
				</div>
				
			</div>
		</div>
	);
};

export default Vehicle;
