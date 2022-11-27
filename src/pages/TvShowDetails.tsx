import { useEffect, useState } from 'react';
import { getTvShow } from '../services/tvShowServices';
import { TvShow } from '../types/tvShows';
import { useParams } from 'react-router-dom';
import {  Container, Row, Col, Image, Button } from 'react-bootstrap';
import Header from '../components/Header';

const TvShowDetails = ():JSX.Element => { 
  const [tvShow, setTvShow] = useState<TvShow | null>(null);
  const params = useParams();
  const currentId = params.tvShowId;

  useEffect(   
    ()=>{
      const fetchTvShow = async () => {
        const tvShowData = await  getTvShow(currentId);
        setTvShow(tvShowData);
      };
      fetchTvShow();
    }
    , [currentId]);

  return (
    <div>
      <Header   />
      <Container style={{ backgroundColor:'white' }}>
        <Row className='px-4 my-5'>
          <Col sm={4}> 
            <Image   src={tvShow?.image.medium} fluid />
          </Col> 
          <Col sm={3}>
            <div className='mt-3 d-flex'>
              <div>
                <h6><b>title: </b>{tvShow?.name}</h6>
                <h6><b>type: </b>{tvShow?.type}</h6>
                <h6><b>title: </b>{tvShow?.name}</h6>
                <h6><b>status: </b>{tvShow?.status}</h6>
                <h6><b>runtime: </b>{tvShow?.runtime}</h6>
                <h6><b>average Run time: </b>{tvShow?.averageRuntime}</h6>
                <h6><b>premiered: </b>{tvShow?.premiered}</h6>
                <h6><b>ended: </b>{tvShow?.ended}</h6>
                <h6><b>officialSite: </b>{tvShow?.officialSite}</h6>
                <h6><b>schedule: </b>{tvShow?.name}</h6>
              </div>
              <div>
                <h6><b>rating: </b>{tvShow?.rating.average}</h6>
                <h6><b>weight: </b>{tvShow?.weight}</h6>
                <h6><b>network: </b>{tvShow?.name}</h6>
                <h6><b>webChannel: </b>{tvShow?.webChannel}</h6>
                <h6><b>dvdCountry: </b>{tvShow?.dvdCountry}</h6>
                <h6><b>externals: </b>{tvShow?.averageRuntime}</h6>
                <h6><b>updated: </b>{tvShow?.updated}</h6>
                <h6><b>ended: </b>{tvShow?.ended}</h6>
                <h6><b>officialSite: </b>{tvShow?.officialSite}</h6>
              </div>             
            </div>
          </Col>
        </Row>
        <Button href="/"> Back To Movie List</Button>
      </Container>    
      <div>
      </div>
    </div>
  );
};

export default TvShowDetails;
