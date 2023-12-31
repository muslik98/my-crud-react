import React from "react";

export default function TableItem(props) {

  return (
    <tr className="table-header-row">
        <td>
             <input type="checkbox" name="checkbox" id={props.id} />
        </td>
        <td>Action</td>
        <td>{props.projectName}</td>
        <td>{props.clientName}</td>
        <td>{props.startDate}</td>
        <td>{props.endDate}</td>
        <td>{props.status}</td>
    </tr>
  );
}
