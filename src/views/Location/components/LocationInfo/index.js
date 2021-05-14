const LocationInfo = ({infoLocation}) => {
    return (
        <div>
           <ul>
               <li>{infoLocation.name}</li>
               <li>{infoLocation.type}</li>
               <li>{infoLocation.dimension}</li>
               <li>{infoLocation.residents && infoLocation.residents.length}</li>
           </ul>
        </div>
    )
}

export default LocationInfo
