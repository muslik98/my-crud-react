import React from "react";
import Form from './Form';  

export default function NewForm(props) {

    const getData = (data) => {
        const newData = {
            id: Math.floor(Math.random() * 100).toString().padStart(2, '0'),
            ...data
        }
        props.onSaveApp(newData);
      };

    return (
        <div>
            <Form onSaveNewForm={getData} />
        </div>
    );
};