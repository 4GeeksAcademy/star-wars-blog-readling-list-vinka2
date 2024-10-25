import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Specie = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getSpecie(params.theid);
	}, []);

    function imageError(e) {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }

	if (!store.currentSpecie || !store.currentSpecie.properties) {
		return <h2 className="text-center">Loading...</h2>; 
	}

	return (
		<div className="container" style={{paddingRight: '10%', paddingLeft: '10%'}}>
			<div className="row pb-4">
				<div className="col-4 d-flex justify-content-center">
                	<img onError={imageError} src={`https://starwars-visualguide.com/assets/img/species/${params.theid}.jpg`} className="card-img-top" style={{ height: 'auto', width: '80%' }}/>
				</div>
				<div className="col-8 d-flex flex-column justify-content-center align-items-center">
					<h1>{store.currentSpecie.properties.name}</h1>
					<h5><strong>{store.currentSpecie.description}</strong></h5>
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
					<p>{store.currentSpecie.properties.name}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Classification</strong></h6>
					<p>{store.currentSpecie.properties.classification}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Average Height</strong></h6>
					<p>{store.currentSpecie.properties.average_height}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Average Lifespan</strong></h6>
					<p>{store.currentSpecie.properties.average_lifespan}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Language</strong></h6>
					<p>{store.currentSpecie.properties.language}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Designation</strong></h6>
					<p>{store.currentSpecie.properties.designation}</p>
				</div>	
			</div>
		</div>
	);
};

export default Specie;