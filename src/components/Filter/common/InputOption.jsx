import React from 'react'
import './inputOption.css'

function ClientOption() {
    return (
        <div className='client-container'>
            <label htmlFor="">Client</label>
            <select name="client-option" id="client-option">
                <option value="all-client">All Client</option>
                <option value="NEC">NEC</option>
                <option value="TAM">TAM</option>
                <option value="TUA">TUA</option>
            </select>
        </div>
    );
}

function StatusClient() {
    return (
        <div className='status-container'>
            <label htmlFor="">Status</label>
            <select name="status-option" id="status-option">
                <option value="all-status">All Status</option>
                <option value="OPEN">OPEN</option>
                <option value="DOING">DOING</option>
                <option value="DONE">DONE</option>
            </select>
        </div>
    );
}

export {ClientOption, StatusClient};