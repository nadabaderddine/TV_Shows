import axios from "axios";
import {TvShow} from "../types/tvShows"

export const getTvShowsList= async():Promise<TvShow[]>  => {
   const tvShowsList= await axios.get(`https://api.tvmaze.com/shows`) 

   return tvShowsList.data
}


export const getTvShow = async(id?:string):Promise<TvShow>  => {
   const tvShow= await axios.get(`https://api.tvmaze.com/shows/${id}`) 

   return tvShow.data
}

