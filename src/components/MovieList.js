import React from 'react'
import Movie from './Movie'
import { Row } from 'react-bootstrap'

export default function MovieList(movies) {
return (
    <div>
        <Row>
    {movies.movies.map((movie) =>(
        <Movie movie={movie} />
    ))
    }
    </Row>
    </div>
)
}
