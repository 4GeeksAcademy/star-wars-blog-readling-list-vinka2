import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import starwarsLogo from "../../img/swlogo.jpg";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const handleDeleteFavorite = (favoriteId) => {
        actions.deleteFavorite(favoriteId);
	}

	const returnToHome = () => {
		navigate("/")
	};

	return (
		<nav className="navbar mb-3" style={{ backgroundColor: '#000000' }}>
			<img src={starwarsLogo} style={{ width: '100px', height: 'auto', marginLeft: '10%' }} alt="Star Wars Logo" onClick={returnToHome}/>
			<div style={{marginRight: '10%'}}>
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Favorites<span className="badge rounded-pill bg-secondary">{store.favorites.length}</span></button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favorites.map(favorite => 
							<li className="ms-2" key={favorite.id}>{favorite.name}
								<button className="btn" onClick={() => handleDeleteFavorite(favorite.favoriteId)}>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
										<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
									</svg>	
								</button>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
