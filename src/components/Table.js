import React, { Component } from 'react';
import TableElement from './TableElement';

class Table extends Component{

    render(){
        var {data} = this.props;
        var mapDataTotable = data.map((dataItem, index)=>{
            return <TableElement
                    key={index}
                    dataItem={dataItem}>
                    </TableElement>
        })
        return(
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Comment ID</th>
                        <th>Excerpt</th>
                    </tr>
                </thead>
                <tbody>
                    {mapDataTotable}
                </tbody>
            </table>
        )
    }
}

export default Table;