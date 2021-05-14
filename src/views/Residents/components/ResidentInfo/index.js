import React from 'react'

const ResidentInfo = ({resident}) => {
    return (
        <div >
            {
                resident?.map((e)=>{
                    return(
                        <div key={e.id}>
                            <p>{e.name}</p>
                            <p>{e.image}</p>
                            <p>{e.status}</p>
                            <p>{e.origin.name}</p>
                            <p>{e.episode && e.episode.length}</p>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default ResidentInfo
