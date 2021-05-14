import React, {useEffect, useState} from 'react'
import getCharacter from '../../helpers/getCharacter';
import ResidentsContainer from './components/ResidentContainer'
const Residents = ({arrayResidentsUrl}) => {
    const [resident, setResident] = useState([])
    useEffect(() => {
        if(arrayResidentsUrl){
            getCharacter(arrayResidentsUrl)
            .then((data)=> {
                setResident(data)
            })
        }
    }, [arrayResidentsUrl])
    return (
        <div>
            {
                resident && <ResidentsContainer infoResident={resident}/>
            }
        </div>
        
    )
}

export default Residents
