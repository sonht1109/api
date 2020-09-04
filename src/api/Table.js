import React from 'react';
import TableElm from './TableElm';


function Table(props){

    var {posts, match} = props;
    
    var mapPostsToTable = posts.map((post, index) => {
        return (
            <TableElm key={index} post={post} match={match}></TableElm>
        )
    })

    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>title</th>
                    <th>status</th>
                    <th>last update</th>
                    <th>tick</th>
                </tr>
            </thead>
            <tbody>
                {posts.length > 0 && mapPostsToTable}
            </tbody>
        </table>
    );
}

export default Table;