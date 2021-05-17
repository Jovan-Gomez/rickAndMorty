import React, {useState} from 'react'
import './style.css'
const SearchBox = ({onSearch, onClose, isAtTop}) => {
    const [value, setValue] = useState('');

    const handleCloseClick = () =>{
        onClose()
        setValue('');
    }
    return (
        <div className="searchBox">
            <div className="SearchBox__logo">
                <img src='https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png' alt='logo'/>
                <p className="subtitle">App</p>
            </div>
            <div className={isAtTop ? 'SearchBox__box' : undefined}>
                {isAtTop &&  <button className="btn btn-close" onClick={()=>{handleCloseClick()}}>Close</button>}
                <input 
                    className="SearchBox__input"
                    id="location"
                    onChange={({target:{value}}) => setValue(value)}
                    placeholder='Write location name'
                    value={value} 
                    />
                {value && <button className="btn btn-search" onClick={()=>{onSearch(value.toLowerCase())}} disabled={!value.length}>Search</button>}
            </div>
        </div>
    )
}

export default SearchBox
