import React, {useEffect, useState} from 'react'
import ResidentsContainer from './components/ResidentContainer'
const Residents = ({arrayResidentsUrl}) => {
    const [residents, setResidents] = useState([]);
    useEffect(()=>{
        const baseUrl = 'https://rickandmortyapi.com/api/character/'
        const ids = [];
        if(arrayResidentsUrl){
            arrayResidentsUrl.forEach((e)=>{
                ids.push(e.slice(baseUrl.length))
            });
        fetch(baseUrl + ids).then(resp => resp.json()).then(data => setResidents(data))    
        }else{
            setResidents({error : true})
        }
    }, [arrayResidentsUrl])



    return (
        <>
            <ResidentsContainer arrResidents={residents}/>
        </>
    )
}

export default Residents
