import React, {useState} from 'react';
import { NewButton, DeleteButton } from './common/TableButton';
import './table.css';
import TableItem from './TableItem';
import TablesFilter from './TablesFilter';

export default function Table(props) {
  const [statusFilter, setStatusFilter] = useState('Open');

  const filterHandler = filter => {
    setStatusFilter(filter);
  }

  return (
    <div className='table-container'>
      <div className='button-container'>
        <NewButton className='new-button' />
        <DeleteButton className='delete-button' />
        <TablesFilter selected={statusFilter} onChangeFilter={filterHandler} />
      </div>
      <table className='data-table'>
        <thead>
          <tr className='table-header-row'>
            <th><input type="checkbox" name="checkbox" id="" /></th>
            <th>Action</th>
            <th>Project Name</th>
            <th>Client</th>
            <th>Project Start</th>
            <th>Project End</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            props.items.map(item => 
              <TableItem
                key={item.id}
                projectName={item.projectName}
                clientName={item.clientName}
                startDate={item.startDate}
                endDate={item.endDate}
                status={item.status}
              />)
          }
        </tbody>
      </table>
    </div>
  );
}
