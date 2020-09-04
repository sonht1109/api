import React, { Component } from 'react';

class TableElement extends Component{

    render(){
        var {dataItem} = this.props;
        return(
            <tr>
                <td>
                    <img src={dataItem.feature_image} width={100} height={60} alt="">
                    </img>
                </td>
                <td>{dataItem.title}</td>
                <td>{dataItem.comment_id}</td>
                <td>{dataItem.excerpt}</td>
            </tr>
        )
    }
}

export default TableElement;