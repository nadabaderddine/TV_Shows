import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { TvShow } from '../types/tvShows';

interface TvShowBoxProps {
  tvShowItem:TvShow;
  show:boolean;
  handleClose:()=>void
}

const TvShowDetailsModal = ({ tvShowItem, show, handleClose }:TvShowBoxProps):JSX.Element=>{
  const navigate = useNavigate();

  return (    
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <img className="card-img-top" style={{ width:'14rem' }} src={tvShowItem.image.medium} />              
        <h4>IMDb:{tvShowItem.externals.imdb} </h4>
        <h5>Release Date:{tvShowItem.premiered} </h5>
        <br></br>
        <h6>Overview</h6>
        <p>{tvShowItem.summary}</p>
        <Button variant="outline-dark" onClick={()=>navigate(`/tvShow/${tvShowItem.id}`)  }>See More Details</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>     
  );
};

export default TvShowDetailsModal;