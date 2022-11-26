import React,{useEffect,useState} from 'react';
import {getTvShowsList} from "../services/tvShowsServices"
import {TvShow} from "../types/tvShows"
const TvShowsList=():JSX.Element=>{
const[tvShowsList,setTvShowsList]=useState<TvShow[]>([])
  useEffect(
    
    ()=>{
      const fetchShowList = async()=>{
        const tvShowListData= await  getTvShowsList()
        setTvShowsList(tvShowListData)
      }
      fetchShowList()
    }
    ,[])
    console.log("tvShowsList",tvShowsList);
    
  return (
    <div>
    <h1>tv Shows List</h1>
    </div>
  );
}

export default TvShowsList;
