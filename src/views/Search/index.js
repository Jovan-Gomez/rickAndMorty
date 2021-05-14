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
                const findData = data.find((value)=>{
                    return value
                })
                setResults(findData)
            })
        }
    }, [queryTerm]);
    const handleCloseClick = ()=>{
        setIsAtTop(false);
        setResults({});
        setQueryTerm('');
    }
   
    return (
        <header className={`App-header ${isAtTop ? "search-top" : "search-center"}`}>
            <SearchBox onSearch={setQueryTerm} onClose={handleCloseClick}/>
          {  
            isAtTop && <Location data={results}/>
          }
        <Residents arrayResidentsUrl={results.residents}/>
        </header>
    )
}

export default Search
