import axios from 'axios';
import { TvShow } from '../types/tvShows';

export const getTvShowsList = async ():Promise<TvShow[] | undefined>  => {
  try {
    const tvShowsList = await axios.get('https://api.tvmaze.com/shows'); 
    return tvShowsList.data;
  } catch (error) {
    return undefined;
  } 
};

export const getTvShow = async (id?:string):Promise<TvShow | undefined>  => {
  try {
    const tvShow = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    return tvShow.data;
  } catch (error) {
    return undefined;
  } 
};

