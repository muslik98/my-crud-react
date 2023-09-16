import React, {useState} from 'react'
import Filter from './components/Filter/Filter'
import Table from './components/Table/Tables'
import Form from './components/Form/Form'
import './app.css'
import NewForm from './components/Form/NewForm'

function App() {

  const project = [
    {
      id: 'p1',
      projectName: 'projek 1',
      client: 'udin',
      startDate: '2023-01-09',
      endDate: '2024-01-09',
      status: 'ongoing'
    }
  ];

  const getNewForm = (form) => {
    const appForm = {
      ...form
    };
    console.log('App.jsx', form);
  };

  return (
    <>
      <div className='container'>
        <h1>Project</h1>
        <Filter />
        <NewForm onSaveApp={getNewForm} />
        <Table items={project} />
      </div>
    </>
  );
}

export default App;
