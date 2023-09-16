import React from 'react'
import './button.css'

function NewButton() {
    return (
        <button type='submit' className="new-button">New</button>
    )
}

function DeleteButton() {
    return (
        <button type='submit' className="delete-button">Delete</button>
    )
}

export {NewButton, DeleteButton};