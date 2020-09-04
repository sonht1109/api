import React, { useContext } from 'react';
import { ChoiceContext } from '../context/ChoiceContext';


function ChoiceTableElm(props){

    const choiceContext = useContext(ChoiceContext);
    let IDs = choiceContext.IDs;

    var {post} = props;
    var convertDate = (post)=>{
        var date = Date.now() - Date.parse(post.updated_at).toString();
        return Math.round(date/86400000);
    }

    const onUpdateIDs = (e)=>{
        var target = e.target;
        var id = target.parentElement.parentElement.getAttribute('data-id');
        var index = IDs.findIndex(item => {
            return item === id;
        })
        IDs.splice(index, 1);
        choiceContext.onUpdateIDs(IDs);
    }

    return (
        <tr data-id={post.id}>
            <td>
                <span className="title pointer" >{post.title}</span>
                <p>By <span>
                    {post.authors[0].name}
                    </span> in <span>Getting started</span></p>
            </td>
            <td className="status">{post.status}</td>
            <td>{convertDate(post)} days ago</td>
            <td>
                <input type="checkbox"
                defaultChecked={true}
                onChange={onUpdateIDs}/>  
            </td> 
        </tr>
    )
}

export default ChoiceTableElm;