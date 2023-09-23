import React, {useState} from 'react'
import Filter from './components/Filter/Filter'
import Table from './components/Table/Tables'
import Form from './components/Form/Form'
import './app.css'
import NewForm from './components/Form/NewForm'

const projects = [
  {
    id: 'p1',
    projectName: 'projek 1',
    clientName: 'udin',
    startDate: '2023-01-09',
    endDate: '2024-01-09',
    status: 'Open'
  },
  {
    id: 'p2',
    projectName: 'projek 2',
    clientName: 'mus',
    startDate: '2022-01-09',
    endDate: '2023-01-09',
    status: 'Doing'
  }
];

function App() {

  const [project, setProject] = useState(projects);

  const getNewForm = (form) => {
    setProject(prevProject => {
      return [form, ...prevProject]
    })
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
