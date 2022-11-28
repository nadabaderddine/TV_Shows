import { useEffect, useState } from 'react';
import { getTvShow } from '../services/tvShowServices';
import { TvShow } from '../types/tvShows';
import { useParams } from 'react-router-dom';
import {  Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import Header from '../components/Header';
import '../styles/tvShows.css';
import Spinner from 'react-bootstrap/Spinner';

const TvShowDetails = ():JSX.Element => { 
  const [tvShow, setTvShow] = useState<TvShow | null>(null);
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [errorData, setErrorData] = useState<boolean>(false);
  const params = useParams();
  const currentId = params.tvShowId;

  useEffect(   
    ()=>{
      const fetchTvShow = async () => {      
        const tvShowData = await  getTvShow(currentId);
        setLoadingData(false);
        if (tvShowData) {
          setTvShow(tvShowData);     
        } else {
          setErrorData(true);
          console.log('Error occured when fetching tv show Details');  
        }                             
      };  
      fetchTvShow();  
    }
    , [currentId]);

  if (loadingData) {
    return (
      <div className="spinner">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>  
    );
  }
  if (errorData) {
    return <p>Error please reload the page</p>;  
  }
     
  return (
    <div>
      <Header />
      <div className='px-5'>
        <h1 className="titleTvShow-Details mt-5 ">{tvShow?.name}</h1>
      </div>   
      <Container className='d-flex justify-content-around bg-white'>       
        <Row>
          <Col sm={8}>
            <Row>
              <Col sm={4}>
                <Image src={tvShow?.image.medium} fluid />
              </Col>
              <Col sm={8}>
                <p>{tvShow?.summary.replace( /(<([^>]+)>)/ig, '')} </p>
              </Col>
            </Row>           
          </Col>
          <Col sm={4} >
            <Card className='Card-tvShowDetails'>
              <h4>Tv Show informations</h4>
              <div><b>Network: </b>{tvShow?.network?.name}</div>
              <div><b>Schedule: </b> {tvShow?.schedule?.days} at {tvShow?.schedule?.time}</div>
              <div><b>Status: </b>{tvShow?.status}</div>
              <div><b>Show Type: </b>{tvShow?.type}</div>           
              <div><b>Rating: </b>{tvShow?.rating?.average}</div> 
              <div><b>Official site: </b> <a href={tvShow?.officialSite}>{tvShow?.officialSite}</a></div>
              <div><b>Genres: </b>{tvShow?.genres.join(' | ')} </div>
            </Card>
          </Col>
        </Row>
      </Container>  
      <div className='px-5'>
        <Button href="/">Back To Movie List</Button>
      </div>          
      <div>
      </div>
    </div>
  );
};

export default TvShowDetails;
