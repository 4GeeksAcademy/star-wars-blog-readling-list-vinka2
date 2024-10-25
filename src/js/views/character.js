import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getCharacter(params.theid);
	}, []);

    function imageError(e) {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }

	if (!store.currentCharacter || !store.currentCharacter.properties) {
		return <h2 className="text-center">Loading...</h2>; 
	}

	return (
		<div className="container" style={{paddingRight: '10%', paddingLeft: '10%'}}>
			<div className="row pb-4">
				<div className="col-4 d-flex justify-content-center">
                	<img onError={imageError} src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} className="card-img-top" style={{ height: 'auto', width: '80%' }}/>
				</div>
				<div className="col-8 d-flex flex-column justify-content-center align-items-center">
					<h1>{store.currentCharacter.properties.name}</h1>
					<h5><strong>{store.currentCharacter.description}</strong></h5>
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
					<p>{store.currentCharacter.properties.name}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Birth Year</strong></h6>
					<p>{store.currentCharacter.properties.birth_year}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Gender</strong></h6>
					<p>{store.currentCharacter.properties.gender}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Height</strong></h6>
					<p>{store.currentCharacter.properties.height}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Skin Color</strong></h6>
					<p>{store.currentCharacter.properties.skin_color}</p>
				</div>
				<div className="col-2 text-center text-danger">
					<h6><strong>Eye Color</strong></h6>
					<p>{store.currentCharacter.properties.eye_color}</p>
				</div>
				
			</div>
		</div>
	);
};

export default Character;
