import {useEffect,useState} from 'react';
import {getTvShowsList} from "../services/tvShowServices"
import {TvShow} from "../types/tvShows"
import '../styles/tvShows.css'
import { useNavigate } from 'react-router-dom';

const TvShowsList=():JSX.Element=>{
const[tvShowsList,setTvShowsList]=useState<TvShow[]>([])
 const navigate = useNavigate();
useEffect(
    
    ()=>{
      const fetchTvShowList = async()=>{
        const tvShowListData= await  getTvShowsList()
        setTvShowsList(tvShowListData)
      }
      fetchTvShowList()
    }
    ,[])
   
  return (
    <div>
    <h1>tv Shows List</h1>
    <div className='card'>
      {tvShowsList.map((tvShowItem) =>  
      <div key={tvShowItem.id}>
      <img src={tvShowItem.image.medium} alt="Avatar" style={{width:"20%" }}    />
  <div className='container'>
    <h4><b>{tvShowItem.name}</b></h4>
    <p>bio</p>
   
   <button onClick={()=>navigate('/tvShow/'+tvShowItem.id)  } >See more details</button>
  </div>
      </div>
  
  )} 
</div>
    </div>
  );
}

export default TvShowsList;
