    import React, { useState } from 'react';
    import Submit from '../Filter/common/FilterButton';
    import './form.css';

    export default function Form(props) {
        const [formValues, setFormValues] = useState({
            projectName: '',
            clientName: '',
            startDate: '',
            endDate: '',
            status: ''
        });

        //multi useState multi handler

        // const [projectName, setProjectName] = useState('');
        // const [clientName, setClientName] = useState('');
        // const [startDate, setStartDate] = useState('');
        // const [endDate, setEndDate] = useState('');
        // const [status, setStatus] = useState('');

        // const projectNameHandler = (event) => {
        //     setProjectName(event.target.value);
        // };
        // const clientNameHandler = (event) => {
        //     setClientName(event.target.value);
        // };
        // const startDateHandler = (event) => {
        //     setStartDate(event.target.value);
        // };
        // const endDateHandler = (event) => {
        //     setEndDate(event.target.value);
        // };
        // const statusHandler = (event) => {
        //     setStatus(event.target.value);
        // };

        // const submitHandler = (event) => {
        //     event.preventDefault();
            
        //     const newForm = {
        //         projectName: projectName,
        //         clientName: clientName,
        //         startDate: startDate,
        //         endDate: endDate,
        //         status: status
        //     };

        //     console.log(newForm);
        // };

        //single useState multiple handler

        // const [formValues, setFormValues] = useState({
        //     projectName: '',
        //     clientName: '',
        //     startDate: '',
        //     endDate: '',
        //     status: ''
        // });

        // const inputChangeHandler = (name, value) => {
        //     setFormValues({
        //         ...formValues,
        //         [name]: value
        //     });
        // };

        // const submitHandler = (event) => {
        //     event.preventDefault();

        //     const newForm = {
        //         ...formValues,
        //         startDate: new Date(formValues.startDate),
        //         endDate: new Date(formValues.endDate)
        //     };

        //     console.log(newForm);
        // };

        const inputChangeHandler = (event) => {
            const { name, value } = event.target;
            setFormValues({
                ...formValues,
                [name]: value
            });
        };

        const submitHandler = (event) => {
            event.preventDefault();
            console.log('props', props);

            const formObject = {
                ...formValues
            };

            // console.log('obj value : ', formObject);
            props.onSaveNewForm(formObject);

            setFormValues({
                projectName: '',
                clientName: '',
                startDate: '',
                endDate: '',
                status: ''
            });
        };

        return (
            <form className='form-container' onSubmit={submitHandler}>
                <div className='input-container'>
                    <label>Project Name</label>
                    <input type="text" value={formValues.projectName} name="projectName" onChange={inputChangeHandler}/>
                </div>
                <div className='input-container'>
                    <label>Client Name</label>
                    <input type="text" value={formValues.clientName} name="clientName" onChange={inputChangeHandler}/>
                </div>
                <div className='input-container'>
                    <label>Project Start</label>
                    <input type="date" value={formValues.startDate} name="startDate" onChange={inputChangeHandler}/>
                </div>
                <div className='input-container'>
                    <label>Project End</label>
                    <input type="date" value={formValues.endDate} name="endDate" onChange={inputChangeHandler}/>
                </div>
                <div className='input-container'>
                    <label>Status</label>
                    <input type="text" value={formValues.status} name="status" onChange={inputChangeHandler}/>
                </div>
                <Submit title="Submit" type="submit"/>
            </form>
        );
    }
