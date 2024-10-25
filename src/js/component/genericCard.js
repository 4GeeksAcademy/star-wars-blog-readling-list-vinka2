import React, {useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/card.css";

export const Card = ({title,body,id,type,width,imageHeight}) => {
    const { store, actions } = useContext(Context);

    function imageError(e) {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }

    const favoriteId = `${type}-${id}`;
    const isFavorite = store.favorites.some(favorite => favorite.favoriteId === favoriteId);
    
    const handleAddFavorite = () => {
        const item = { name: title, favoriteId: favoriteId };
        if (isFavorite) {
            actions.deleteFavorite(favoriteId); 
        } else {
            actions.addFavorite(item);
        }
    };

    return (
        <div className="card" style={{width: `${width}`}}> 
            <div>
                <img onError={imageError} src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`} className="card-img-top" style={{ height: 'auto', width: '100%' }} alt={`Star Wars ${title} ${type} image`}/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="card-text">{body}</div>
            </div>
            <div className="d-flex justify-content-between ms-3 me-3 mb-3">
                <Link to={`/${type}/${id}`} className="btn border border-primary text-primary hover-button">Learn more!</Link>
                <button className="btn border border-warning heart-hover-button" onClick={handleAddFavorite}>
                    {isFavorite ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F8C000" className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                        </svg> :  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                        </svg>
                    }
                </button>
            </div>
        </div>
    );
};
export default Card;