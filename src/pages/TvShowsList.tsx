import { useEffect, useState } from 'react';
import { getTvShowsList } from '../services/tvShowServices';
import { TvShow } from '../types/tvShows';
import '../styles/tvShows.css';
import TvShowBox from '../components/TvShowBox';
import Header from '../components/Header';
import { searchTvShows } from '../helpers/tvShowsHelper';
const TvShowsList = ():JSX.Element => {
  const [tvShowsList, setTvShowsList] = useState<TvShow[]>([]);
  const [searchItem, setSearchItem] = useState<string>('');
  useEffect(    
    ()=>{
      const fetchTvShowList = async () => {
        const tvShowListData = await  getTvShowsList();
        setTvShowsList(tvShowListData);
      };
      fetchTvShowList();
    }
    , []);
  const filteredList = searchTvShows(searchItem, tvShowsList);
    
  return (
    <>   
      <Header isDisplaySearch searchItem={searchItem} setSearchItem={setSearchItem} /> 
      <div className='container'>
        <div className='grid'>
          {filteredList.map((tvShowItem) => <TvShowBox tvShowItem={tvShowItem} key={tvShowItem.id} />)}         
        </div>

      </div>        
    </>
  );
};

export default TvShowsList;
