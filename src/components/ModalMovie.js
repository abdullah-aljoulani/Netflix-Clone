import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function ModalMOvie({ movie, comment, setComment, onClose, onAddToFavorites }) {
    const handleAddToFavorites = () => {
        onAddToFavorites();
        onClose();
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };
    
    return (
        <>
        <Modal show={handleShow} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{movie.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <img className="img-fluid" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title || movie.name} />
        <p>{movie.overview}</p>
            <textarea
                className="form-control"
                rows="3"
                value={comment}
                onChange={handleCommentChange}
                ></textarea>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleAddToFavorites}>
            Add to Favorite list
            </Button>
            <Button variant="secondary" onClick={onClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
    }

export default ModalMOvie;