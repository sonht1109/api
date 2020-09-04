import React, { useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ChoiceContext } from '../context/ChoiceContext';

function Control(props){
    let location = useLocation();

    const choiceContext = useContext(ChoiceContext);

    const onStatusFilter = (e)=>{
        props.onStatusFilter(e.target.value);
    }
    const onAuthorFilter = (e)=>{
        props.onAuthorFilter(e.target.value);
    }
    const onTimeFilter = (e)=>{
        props.onTimeFilter(e.target.value);
    }

    return(
        <div className="control">

            <h2>Posts</h2>
            <NavLink to={`${location.pathname}/choice`} style={{marginLeft: "auto"}}>
                <button className="btn btn-success">
                        <i className="fa fa-list-ul mr-2"></i>
                        <span>{choiceContext.IDs.length}</span>
                </button>
            </NavLink>

            <div className="select">
                <select className="select-post" onChange={onStatusFilter}>
                    <option value = "">All posts</option>
                    <option value = "status:published">- Published</option>
                    <option value = "status:draft">- Draft</option>
                </select>
                <select className="select-author" onChange={onAuthorFilter}>
                    <option value = "">All authors</option>
                    <option value = "authors:ghost">- Ghost</option>
                    <option value = "authors:dien">- Dien</option>
                </select>
                <select className="sort" onChange={onTimeFilter}>
                    <option value = "updated_at DESC">Newest</option>
                    <option value = "updated_at ASC">Oldest</option>
                </select>
            </div>

            <NavLink to="/home/add">
                <button className="btn btn-primary">+ New post</button>
            </NavLink>
        </div>
    )
}

export default Control;