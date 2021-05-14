import React, {useState} from 'react'
import './style.css'
const SearchBox = ({onSearch, onClose}) => {
    const [value, setValue] = useState('');

    const handleCloseClick = () =>{
        onClose()
        setValue('');
    }
    return (
        <div className="searchBox">
           <label htmlFor="location"><h2 className="SearchBox__title">Search Location</h2></label>
           <input 
             value={value} 
             id="location"
             onChange={({target:{value}}) => setValue(value)}
             className="SearchBox__input"
            />
           <button onClick={()=>{onSearch(value.toLowerCase())}}>Search</button>
           <button onClick={()=>{handleCloseClick()}}>Close</button>
        </div>
    )
}

export default SearchBox
