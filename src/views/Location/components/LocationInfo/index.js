import './style.css'
const LocationInfo = ({infoLocation}) => {
    return (
        <>
        {
            infoLocation.error ? <p className="notFound">Location not found</p> :
        <div className="location">
            <div className="location__body">
                <h3 className="text-center">
                <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg></span>
                 {infoLocation.name}
                 </h3>
                 <p>
                    <span><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg></span>
                    - {infoLocation.type}
                 </p>
                 <p>
                    <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M253.47 17.406C123.76 17.406 18.437 122.76 18.437 252.47c0 129.707 105.324 235.06 235.03 235.06 129.707 0 235.063-105.353 235.063-235.06 0-129.71-105.355-235.064-235.06-235.064zM367.874 68.75c61.246 38.19 101.97 106.14 101.97 183.72 0 17.143-1.993 33.823-5.75 49.81l-34.25-18.06 22 54.874c-9.454 21.647-22.362 41.432-38 58.687l-43.158-30.936-64.625 47.72-61.656 6.967-13.906-41.78-49.72 26.844-68.093-18.938 9.157 36.594c-28.41-21.793-51.23-50.466-66-83.563L81.25 304.47l32.25 17.124 59.22-9.875 2.843-40.908-37.344-1.718 4.905-17.844 30.78-25.313-25.093-15.625 67.22-38.593-45.345-29.657-66.625 40.187-49.437-15.28c13.812-32.14 35.21-60.22 61.906-82.064l-3.75 44.375 43.376-34.124 72 22.22-22.5-27.407L233 75.562l26.813 28.468 71 9.845-3.5-34.47 41.468 12.657-.905-23.312zm1.156 120.03L278 199.47l28.906 43.218 3.156 64.468L339.25 321l11.438-28.375 62.656 48.656L395.78 294l6.408-48.344-43.75-22.72 10.593-34.155zM221 192.438l-31.594 21.188 36.47 14.78 16.686-14.78L221 192.437zm22.188 144.688l18.687 52.594 19.78-42.564-38.467-10.03z"></path></svg></span>
                     - {infoLocation.dimension}
                 </p>
                 <p>
                    <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg></span>
                     - {infoLocation.residents && infoLocation.residents.length}
                 </p>
            </div>
        </div>
        }
        </>
    )
}

export default LocationInfo
