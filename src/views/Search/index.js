import { useState, useEffect } from "react"
import SearchBox from "./components/SearchBox"
import Location from '../Location';
import getLocation from '../../helpers/getLocation'
import Residents from "../Residents";
const Search = () => {
    const [isAtTop, setIsAtTop] = useState(false);
    const [queryTerm, setQueryTerm] = useState('');
    const [results, setResults] = useState({});

    useEffect(()=>{
        if(queryTerm){
            setIsAtTop(true);
            getLocation(queryTerm)
            .then((data)=>{
                if(data?.length){
                    const findData = data.find((value)=>value)
                    setResults(findData)
                }else{
                    setResults(data)
                }
            });
        }
    }, [queryTerm]);

    const handleCloseClick = ()=>{
        setIsAtTop(false);
        setResults({});
        setQueryTerm('');
    }
   
    return (
        <header className={`App-header ${isAtTop ? "search-top" : "search-center"}`}>
          <SearchBox onSearch={setQueryTerm} onClose={handleCloseClick} isAtTop={isAtTop}/>
          {isAtTop &&  <Location data={results}/>}
          {isAtTop && <Residents arrayResidentsUrl={results.residents}/>}
        </header>
    )
}

export default Search
