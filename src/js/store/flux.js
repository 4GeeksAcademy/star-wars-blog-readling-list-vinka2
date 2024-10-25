const baseUrl = "https://www.swapi.tech/api"
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			films: [],
			currentFilm: [],
			characters: [],
			currentCharacter: [],
			planets: [],
			currentPlanet: [],
			vehicles: [],
			currentVehicle: [],
			starships: [],
			currentStarship: [],
			species: [],
			currentSpecie: [],
			favorites: []
		},
		actions: {
			getFilms: async () => {
				try {
					const response = await fetch(baseUrl + "/films")
					if(!response.ok) {
						throw new Error("Error getting films");
					}
					const data = await response.json()
					setStore({films: data.result})	
				} catch (error) {
					console.error("Error getting films", error)
				}
			},
			getFilm: async (id) => {
				try {
					const response = await fetch(`${baseUrl}/films/${id}`);
					if (!response.ok) {
						throw new Error("Error getting film details");
					}
					const filmDetails = await response.json();
					setStore({ currentFilm: filmDetails.result }); 
				} catch (error) {
					console.error("Error getting film details", error);
				}
			},
			getCharacters: async () => {
				try {
					const response = await fetch(baseUrl + "/people")
					if(!response.ok) {
						throw new Error("Error getting characters");
					}
					const data = await response.json()

					const dataDetails = await Promise.all(
						data.results.map(async (element) => {
							const characterDetails = await fetch(element.url);
							const characterDetailsJson = await characterDetails.json();
							return characterDetailsJson.result; 
						})
					);
					console.log(dataDetails)
					setStore({characters: dataDetails})
				} catch (error) {
					console.error("Error getting characters", error)
				}
			},
			getCharacter: async (id) => {
				try {
					const response = await fetch(`${baseUrl}/people/${id}`);
					if (!response.ok) {
						throw new Error("Error getting character details");
					}
					const characterDetails = await response.json();
					setStore({ currentCharacter: characterDetails.result }); 
				} catch (error) {
					console.error("Error getting character details", error);
				}
			},
			getPlanets: async () => {
				try {
					const response = await fetch(baseUrl + "/planets")
					if(!response.ok) {
						throw new Error("Error getting planets");
					}
					const data = await response.json()

					const dataDetails = await Promise.all(
						data.results.map(async (element) => {
							const planetDetails = await fetch(element.url);
							const planetDetailsJson = await planetDetails.json();
							return planetDetailsJson.result; 
						})
					);
					setStore({planets: dataDetails})
				} catch (error) {
					console.error("Error getting planets", error)
				}
			},
			getPlanet: async (id) => {
				try {
					const response = await fetch(`${baseUrl}/planets/${id}`);
					if (!response.ok) {
						throw new Error("Error getting planet details");
					}
					const planetDetails = await response.json();
					setStore({ currentPlanet: planetDetails.result }); 
				} catch (error) {
					console.error("Error getting planet details", error);
				}
			},
			getVehicles: async () => {
				try {
					const response = await fetch(baseUrl + "/vehicles")
					if(!response.ok) {
						throw new Error("Error getting vehicles");
					}
					const data = await response.json()

					const dataDetails = await Promise.all(
						data.results.map(async (element) => {
							const vehicleDetails = await fetch(element.url);
							const vehicleDetailsJson = await vehicleDetails.json();
							return vehicleDetailsJson.result; 
						})
					);
					setStore({vehicles: dataDetails})
				} catch (error) {
					console.error("Error getting vehicles", error)
				}
			},
			getVehicle: async (id) => {
				try {
					const response = await fetch(`${baseUrl}/vehicles/${id}`);
					if (!response.ok) {
						throw new Error("Error getting vehicle details");
					}
					const vehicleDetails = await response.json();
					setStore({ currentVehicle: vehicleDetails.result }); 
				} catch (error) {
					console.error("Error getting vehicle details", error);
				}
			},
			getStarships: async () => {
				try {
					const response = await fetch(baseUrl + "/starships")
					if(!response.ok) {
						throw new Error("Error getting starships");
					}
					const data = await response.json()

					const dataDetails = await Promise.all(
						data.results.map(async (element) => {
							const starshipDetails = await fetch(element.url);
							const starshipDetailsJson = await starshipDetails.json();
							return starshipDetailsJson.result; 
						})
					);
					setStore({starships: dataDetails})
				} catch (error) {
					console.error("Error getting vehicles", error)
				}
			},
			getStarship: async (id) => {
				try {
					const response = await fetch(`${baseUrl}/starships/${id}`);
					if (!response.ok) {
						throw new Error("Error getting starship details");
					}
					const characterDetails = await response.json();
					setStore({ currentStarship: characterDetails.result }); 
				} catch (error) {
					console.error("Error getting starship details", error);
				}
			},
			getSpecies: async () => {
				try {
					const response = await fetch(baseUrl + "/species")
					if(!response.ok) {
						throw new Error("Error getting species");
					}
					const data = await response.json()

					const dataDetails = await Promise.all(
						data.results.map(async (element) => {
							const specieDetails = await fetch(element.url);
							const specieDetailsJson = await specieDetails.json();
							return specieDetailsJson.result; 
						})
					);
					setStore({species: dataDetails})
				} catch (error) {
					console.error("Error getting species", error)
				}
			},
			getSpecie: async (id) => {
				try {
					const response = await fetch(`${baseUrl}/species/${id}`);
					if (!response.ok) {
						throw new Error("Error getting specie details");
					}
					const characterDetails = await response.json();
					setStore({ currentSpecie: characterDetails.result }); 
				} catch (error) {
					console.error("Error getting specie details", error);
				}
			},
			addFavorite: (item) => {
				const newList = [...getStore().favorites, item];
				setStore({ favorites: newList }); 
			},
			deleteFavorite: (favoriteId) => {
				const newList = getStore().favorites.filter(favorite => favorite.favoriteId !== favoriteId);
				setStore({ favorites: newList });
			}
		}
	};
};

export default getState;
