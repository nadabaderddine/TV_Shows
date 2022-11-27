import { TvShow } from '../types/tvShows';


export const searchTvShows = (search:string, tvShowsList:TvShow[]):TvShow[]=>{
  
  const filtredItems =
  tvShowsList.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())) ;
  return filtredItems;
};