import React, { useContext } from 'react';
import { NavLink, useLocation} from 'react-router-dom';
import {ChoiceContext} from '../context/ChoiceContext'


function TableElm(props){

    var choiceContext = useContext(ChoiceContext);
    var IDs = choiceContext.IDs;

    var {post} = props;
    var convertDate = (post)=>{
        var date = Date.now() - Date.parse(post.updated_at).toString();
        return Math.round(date/86400000);
    }

    const location = useLocation();

    const onChoose = (e)=>{
        var target = e.target.parentElement.parentElement;
        var id = target.getAttribute('data-id');
        if(IDs.includes(id)){
            IDs = IDs.filter(tempID => {
                return tempID !== id;
            })
        }
        else{
            IDs.push(id);
        }
        choiceContext.onUpdateIDs(IDs);
    }

    return (
        <tr data-id={post.id}>
            <td>
                <NavLink to={`${location.pathname}/posts/${post.id}`}>
                    <span
                    className="title pointer"
                    >{post.title}
                    </span>
                </NavLink>
                <p>By <span>
                    {post.authors[0].name}
                    </span> in <span>Getting started</span></p>
            </td>
            <td className="status">{post.status}</td>
            <td>{convertDate(post)} days ago</td>
            <td>
                <input type="checkbox" 
                onChange={onChoose}
                checked={IDs.includes(post.id) ? true : false}/>  
            </td> 
        </tr>
    )
}

export default TableElm;