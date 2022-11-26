import axios from "axios";
import {TvShow} from "../types/tvShows"
export const getTvShowsList= async():Promise<TvShow[]>  => {
   const tvShowsList= await axios.get(`https://api.tvmaze.com/shows`) 

   return tvShowsList.data
}

