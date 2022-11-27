import { useState } from 'react';
import { TvShow } from '../types/tvShows';
import TvShowDetailsModal from './TvShowDetailsModal';

interface TvShowBoxProps {
  tvShowItem:TvShow
}

const TvShowBox = ({ tvShowItem }:TvShowBoxProps):JSX.Element=>{
  const [show, setShow] = useState<boolean>(false);
  const handleShow = () =>setShow(true);
  const handleClose = () =>setShow(false); 

  return (
    <div className="card text-center bg-secondary mb-3">
      <div className="card-body">
        <img className='card-img-top' src={tvShowItem.image.medium} alt="tv-show-img"    />   
        <div className="card-body">
          <button type="button" className="btn btn-dark" onClick={handleShow} >View More</button>
          <TvShowDetailsModal  tvShowItem={tvShowItem} handleClose={handleClose} show={show}  />
        </div>
      </div>  
    </div>
  );
};

export default TvShowBox;