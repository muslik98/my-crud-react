import React from 'react'
import { NewButton, DeleteButton } from './common/TableButton';
import './table.css'

export default function Table() {
    return (
        <div className='table-container'>
            <div className='button-container'>
                <NewButton className='new-button' />
                <DeleteButton className='delete-button' />
            </div>
            <table className='data-table'>
                    <tr className='table-header-row'>
                        <th><input type="checkbox" name="checkbox" id="" /></th>
                        <th>Action</th>
                        <th>Project Name</th>
                        <th>Client</th>
                        <th>Project Start</th>
                        <th>Project End</th>
                        <th>Status</th>
                    </tr>
                    <tr className='table-header-row'>
                        <td><input type="checkbox" name="checkbox" id="" /></td>
                        <td>Action</td>
                        <td>Project Name</td>
                        <td>Client</td>
                        <td>Project Start</td>
                        <td>Project End</td>
                        <td>Status</td>
                    </tr>
                    <tr className='table-header-row'>
                        <td><input type="checkbox" name="checkbox" id="" /></td>
                        <td>Action</td>
                        <td>Project Name</td>
                        <td>Client</td>
                        <td>Project Start</td>
                        <td>Project End</td>
                        <td>Status</td>
                    </tr>
            </table>
        </div>
    );
}
