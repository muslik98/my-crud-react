import React from 'react'
import './button.css'

function FilterButton(prop) {
    return (
        <button className="search-button" type={prop.type}>{prop.title}</button>
    )
}

export default FilterButton;