import React, { useState, useEffect } from 'react'
import ResidentInfo from '../ResidentInfo'
const ResidentsContainer = ({arrResidents}) => {
    const [character, setCharacter] = useState([]);
    useEffect(() => {
        if(arrResidents.length > 0) setCharacter(arrResidents)
    }, [arrResidents])
    return (
        <div className="container-residents">
            {
                arrResidents.length > 0 ?
                character.map((e)=>{
                    return(
                        <ResidentInfo name={e.name} episode={e.episode} image={e.image} origin={e.origin} status={e.status} species={e.species} key={e.id}/>
                    );
                })
                :
                <ResidentInfo error={arrResidents}/>
            }
        </div>
        
    )
}

export default ResidentsContainer
