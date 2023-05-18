import React, { useEffect, useState } from 'react'
import MovieList from './MovieList';
// import { Modal, Row } from 'react-bootstrap'
// import Movie from './Movie'
// import axios from 'axios'
// import ModalMOvie from './ModalMovie'

export default function Home() {
    const [movies , setMovies] =useState([])

    useEffect(()=>{
        fetchData();
    }, [])
    const fetchData = async() =>{
        try{
            const res = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_MOVIE_API}`)
            const Data = await res.json();
            // console.log(Data.results);
            setMovies(Data.results)
        }catch(err){
            console.log(err)
        }
    }

return (
    <div>
        <h1> welcome to home page</h1>
        <MovieList movies={movies}/>
    </div>
)
}
