import React from 'react'
import './inputKey.css'

function InputKey() {
    return (
        <div className="input-container">
            <label>Project Name</label>
            <input type="search" name="project-name" id="project-name" />
        </div>
    );
}

export default InputKey;