import React from "react";
import Form from './Form';  

export default function NewForm(props) {

    const getData = (data) => {
        const newData = {
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