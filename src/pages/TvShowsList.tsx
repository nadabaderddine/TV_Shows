import { useEffect, useMemo, useState } from 'react';
import { getTvShowsList } from '../services/tvShowServices';
import { TvShow } from '../types/tvShows';
import '../styles/tvShows.css';
import TvShowBox from '../components/TvShowBox';
import Header from '../components/Header';
import { searchTvShows } from '../helpers/tvShowsHelper';
import Spinner from 'react-bootstrap/Spinner';

const TvShowsList = ():JSX.Element => {
  const [tvShowsList, setTvShowsList] = useState<TvShow[]>([]);
  const [searchItem, setSearchItem] = useState<string>('');
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [errorData, setErrorData] = useState<boolean>(false);

  useEffect(    
    ()=>{
      const fetchTvShowList = async () => {
        const tvShowListData = await  getTvShowsList();
        setLoadingData(false);
        if (tvShowListData) {
          setTvShowsList(tvShowListData);
        } else {
          setErrorData(true);
          console.log('Error occured when fetching tv shows');  
        }                       
      };    
      fetchTvShowList();  
    }
    , []);

  const filteredList = useMemo(()=>searchTvShows(searchItem, tvShowsList), [searchItem, tvShowsList]) ;

  if (loadingData) {
    return (
      <div className="spinner">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  if (errorData) {
    return <p>Error please reload the page</p>;  
  }
    
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
