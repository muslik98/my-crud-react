import React, {useState} from 'react'
import Filter from './components/Filter/Filter'
import Table from './components/Table/Table'
import Form from './components/Form/Form'
import './app.css'

function App() {

  return (
    <>
      <div className='container'>
        <h1>Project</h1>
        <Filter />
        <Form />
        <Table />
      </div>
    </>
  );
}

export default App;
