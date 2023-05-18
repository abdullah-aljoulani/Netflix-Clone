import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React,{useState} from 'react';
import axios from 'axios';
import ModalMovie from './ModalMovie'

function Movie({movie}) {
    const [showModal, setShowModal] = useState(false);
    const [comment, setComment] = useState('');

    const handleAddToFavorites = async () => {
        try {
        const res = await axios.post(`${process.env.REACT_APP_LOCAL_SERVER}/addMovie`, {
            id : movie.id,
            title: movie.title,
            release_date: movie.release_date,
            poster_path: movie.poster_path,
            overview: movie.overview,
            comments: ''
        });
    } catch (error) {
    console.log(error);
    }
};

const handleShowModal = () => {
    setShowModal(true);
};

const handleCloseModal = () => {
    setShowModal(false);
};

return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={'no-pic'}/>
    <Card.Body>
        <Card.Title>{movie.title || movie.name}</Card.Title>
        <Card.Text>
            {movie.overview}
        </Card.Text>
        <Button className="btn btn-secondary" onClick={handleShowModal}>
        Details
        </Button>
    </Card.Body>
    {
    showModal && (
        <ModalMovie
        movie={movie}
        comment={comment}
        setComment={setComment}
        onClose={handleCloseModal}
        onAddToFavorites={handleAddToFavorites}
        />
    )
    }
    </Card>
    )
}
export default Movie;