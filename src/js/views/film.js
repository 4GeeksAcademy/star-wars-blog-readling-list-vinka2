import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Film = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getFilm(params.theid);
	}, []);

    function imageError(e) {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }

	if (!store.currentFilm || !store.currentFilm.properties) {
		return <h2 className="text-center">Loading...</h2>; 
	}

	return (
		<div className="container" style={{paddingRight: '10%', paddingLeft: '10%'}}>
			<div className="row pb-4">
				<div className="col-4 d-flex justify-content-center">
                	<img onError={imageError} src={`https://starwars-visualguide.com/assets/img/films/${params.theid}.jpg`} className="card-img-top" style={{ height: 'auto', width: '80%' }}/>
				</div>
				<div className="col-8 d-flex flex-column justify-content-center align-items-center">
					<h1>{store.currentFilm.properties.title}</h1>
					<h5><strong>{store.currentFilm.description}</strong></h5>
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
					<h6><strong>Title</strong></h6>
					<p>{store.currentFilm.properties.title}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Producer</strong></h6>
					<p>{store.currentFilm.properties.producer}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Director</strong></h6>
					<p>{store.currentFilm.properties.director}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Release Date</strong></h6>
					<p>{store.currentFilm.properties.release_date}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Edited</strong></h6>
					<p>{store.currentFilm.properties.edited}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Created</strong></h6>
					<p>{store.currentFilm.properties.created}</p>
				</div>
				
			</div>
		</div>
	);
};

export default Film;