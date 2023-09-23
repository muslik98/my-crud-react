import React from "react";
import TableItem from './TableItem'

const TablesList = (props) => {

    if (props.items.length === 0) {
        return <p>Tidak ada Content</p>
    }

    return (
        props.items.map(item => 
            <TableItem
                key={item.id}
                projectName={item.projectName}
                clientName={item.clientName}
                startDate={item.startDate}
                endDate={item.endDate}
                status={item.status}
            />)  
    )
}

export default TablesList;