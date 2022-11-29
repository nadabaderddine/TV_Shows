import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { TvShow } from '../types/tvShows';
import '../styles/tvShows.css';

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
        <img className="card-img-top" src={tvShowItem.image.medium} />              
        <h4 className='mt-3'>IMDb:{tvShowItem.externals.imdb} </h4>
        <h5>Release Date:{tvShowItem.premiered} </h5>
        <br></br>
        <h6>Overview</h6>
        <p>{tvShowItem.summary.replace( /(<([^>]+)>)/ig, '')}</p>
        <Button variant="outline-dark" onClick={()=>navigate(`/tvShow/${tvShowItem.id}`)  }>See More Details</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>     
  );
};

export default TvShowDetailsModal;