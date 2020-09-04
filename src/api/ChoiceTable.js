import React, { useContext, useEffect, useState } from 'react';
import { ChoiceContext } from '../context/ChoiceContext';
import {api} from './GhostAdminAPI';
import ChoiceTableElm from './ChoiceTableElm';
import { useHistory } from 'react-router-dom';


function ChoiceTable(){

    const choiceContext = useContext(ChoiceContext);
    var IDs = choiceContext.IDs;
    const history = useHistory();
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        api.posts.browse({
            include: 'tags,authors',
            limit: 'all'
        })
        .then(res => {
            res = res.filter(post=>{
                return IDs.includes(post.id)
            })
            setPosts(res)
            
        })
        .catch(err => {
            console.log(err);
        })
    }, [IDs])

    const onDeleteAll = (e)=>{
        e.preventDefault();
        IDs.forEach(id => {
            api.posts.delete({
                id: id
            })
            .then(function(){
                history.push('/home')
            })
        });
        choiceContext.onUpdateIDs([]);
    }

    const mapPostsToChoiceTale = posts.map(post => {
        return  <ChoiceTableElm
                post={post}
                key={post.id}>
                </ChoiceTableElm>
    })

    return(
        <div>
            <button
            className="btn btn-dark mr-5 mt-3 mb-3" 
            style={{float: "right"}}
            onClick={onDeleteAll}>
                <i className="fa fa-trash"></i> Delete all
            </button>

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
                    {mapPostsToChoiceTale}
                </tbody>
            </table>

        </div>
    );
}

export default ChoiceTable;