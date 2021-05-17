import React from 'react'
import './style.css'
const ResidentInfo = ({name,image,status,origin,episode, species, error}) => {

    return (
        <>
        {
            error ? <p className="notFound">Residents not found</p>
            :
                <article className="card">
                    <div><img src={image} alt={name} width='100%'/></div>
                    <div className="card-body">
                    <div className="section">
                        <h2>{name}</h2>
                        <span className="status">
                        <span className={`status__icon ${status === 'Alive' && 'alive'} ${status === 'Dead' && 'dead'} ${status === 'unknown' && 'unknown'}`}></span>
                        {status} - {species}
                        </span>
                     </div>
                     <div className="section">
                        <span className="text-gray">Last known location:</span>
                        {origin.name}
                       </div>
                       <div className="section">
                            <span className="text-gray">Number of episodes:</span>
                            {episode && episode.length}
                        </div>
                    </div>
                </article>
        }
        </>
    )
}

export default ResidentInfo
