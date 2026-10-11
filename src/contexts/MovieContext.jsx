import {createContext, useState, useContext, useEffect} from 'react'

const MovieContext = createContext()

export const useMovieContext = ()=>useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])
    
    useEffect(()=>{
        const storedFavs = localStorage.getItem('favorites')

        if (storedFavs) setFavorites(JSON.parse(storedFavs))

    }, [])
    
    useEffect(()=>{
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])
    //this changes whenever our favorites array change


    const addToFavorites = (movie) => {
        
        setFavorites(prev => [...prev, movie])
    }
    //To remove a movie to our list of favorites


    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }
    //To add a movie to our list of favorites

    
    
    
    const isFavorite = (movieId) =>{
        return favorites.some(movie => movie.id === movieId)
    }
    
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }
    
    return <MovieContext.Provider value={value}>


        {children}
    </MovieContext.Provider>


}



//provide some global state and some helper functions that we can use from multiple places within our application