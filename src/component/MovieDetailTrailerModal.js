import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';

const MovieDetailTrailerModal = (showModal) => {
    let { movieTrailer } = useSelector((state) => state.movieDetail);

    //console.log("Modal movieTrailer", movieTrailer);

    return (
        <Modal
            {...showModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='modal_wrap'
        >
            <div className='modal_div'>
                <div className='modal_hide'>
                    <button onClick={showModal.onHide}>
                        <FontAwesomeIcon icon={faXmark} style={{ color: "red" }} />
                    </button>
                </div>
                <div className="modal_trailer">
                    <YouTube videoId={movieTrailer.results?.[0].key} />
                </div>
            </div>
        </Modal>
    )
}

export default MovieDetailTrailerModal;