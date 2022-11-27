import { useEffect, useState } from 'react';
import { getTvShowsList } from '../services/tvShowServices';
import { TvShow } from '../types/tvShows';
import '../styles/tvShows.css';
import TvShowBox from '../components/TvShowBox';
import Header from '../components/Header';

const TvShowsList = ():JSX.Element => {
  const [tvShowsList, setTvShowsList] = useState<TvShow[]>([]);

  useEffect(    
    ()=>{
      const fetchTvShowList = async () => {
        const tvShowListData = await  getTvShowsList();
        setTvShowsList(tvShowListData);
      };
      fetchTvShowList();
    }
    , []);
   
  return (
    <>   
      <Header isDisplaySearch /> 
      <div className='container'>
        <div className='grid'>
          {tvShowsList.map((tvShowItem) => <TvShowBox tvShowItem={tvShowItem} key={tvShowItem.id} />)}         
        </div>
      </div>        
    </>
  );
};

export default TvShowsList;
