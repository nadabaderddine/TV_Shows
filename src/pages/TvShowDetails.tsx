import {useEffect,useState} from 'react';
import {getTvShow} from "../services/tvShowServices"
import {TvShow} from "../types/tvShows"

import { useParams } from 'react-router-dom';

const TvShowDetails=():JSX.Element=>{
  
const[tvShow,setTvShow]=useState<TvShow|null>(null)

const params=useParams()

const currentId= params.tvShowId

 
useEffect(
    
    ()=>{
      const fetchTvShow = async()=>{
        const tvShowData= await  getTvShow(currentId)
        setTvShow(tvShowData)
      }
      fetchTvShow()
    }
    ,[])

   

  return (
    <div>
    <h1>One tv Shows</h1>
    <div className='card'>
      
    
      <img src={tvShow?.image.medium} alt="Avatar" style={{width:"20%" }}    />
  <div className='container'>
    <h4><b>{tvShow?.name}</b></h4>
    <p>bio</p>
   
  
  </div>
      </div>
  
 
    </div>
  );
}

export default TvShowDetails;
