import React from 'react'
import './button.css'

function NewButton() {
    return (
        <Button:submit className="new-button">New</Button:submit>
    )
}

function DeleteButton() {
    return (
        <Button:submit className="delete-button">Delete</Button:submit>
    )
}

export {NewButton, DeleteButton};