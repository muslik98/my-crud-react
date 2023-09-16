import React from 'react';
import { NewButton, DeleteButton } from './common/TableButton';
import './table.css';
import TableItem from './TableItem';

export default function Table(props) {
  
  return (
    <div className='table-container'>
      <div className='button-container'>
        <NewButton className='new-button' />
        <DeleteButton className='delete-button' />
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
          <TableItem
            projectName={props.items[0].projectName}
            client={props.items[0].client}
            startDate={props.items[0].startDate}
            endDate={props.items[0].endDate}
            status={props.items[0].status}
          />
        </tbody>
      </table>
    </div>
  );
}
