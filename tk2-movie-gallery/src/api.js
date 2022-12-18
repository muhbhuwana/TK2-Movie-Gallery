import axios from "axios"
import { useEffect, useState } from "react";

const baseUrl = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_APIKEY

export const getMovieList = async() => {
    const movie = await axios.get(`${baseUrl}/3/movie/popular?api_key=${apiKey}`)
    return movie.data.results
}

export const getGenreMovies = async() => {
    const genres = await axios.get(`${baseUrl}/3/genre/movie/list?api_key=${apiKey}`)
    return genres.data.genres
}

export const searchMovie = async(genre= null, sort = null) => {
    
    var search = `${baseUrl}/3/discover/movie?api_key=${apiKey}`
    console.log(genre)
    console.log(sort)

    if (genre != null)
    {
        search = search + `&with_genres=` + genre
    }
    
    if (sort != null)
    {
        search = search + `&sort_by=`+ sort
    }

    const movie = await axios.get(search)

    console.log(movie)
    
    return movie.data.results
}
export const searchMovieText = async(query) => {
    
    var search = `${baseUrl}/3/search/movie?api_key=${apiKey}&query=${query}`
    const movie = await axios.get(search)
    console.log(movie) 
    return movie.data.results
}

export const getMovieVideos = async(movie_id) => {
    const videos = await axios.get(`${baseUrl}/3/movie/${movie_id}/videos?api_key=${apiKey}`)
    return videos.data.results[0]["key"]
}