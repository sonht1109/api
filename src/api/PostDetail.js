import React, {useEffect, useState, useContext} from 'react';
import { useHistory, useParams } from "react-router-dom";
import { api } from './GhostAdminAPI';
import { ChoiceContext } from '../context/ChoiceContext';

function PostDetail(){
    const [post, setPost] = useState({
        id: '',
        title: '',
        custom_excerpt: '', 
        status: '',
        feature_image: '',
        updated_at: '',
        authors: [{}]
    });

    const history = useHistory();
    const params = useParams();
    const choiceContext = useContext(ChoiceContext);
    let IDs = choiceContext.IDs;

    useEffect(()=>{
        api.posts
        .read({
            include: 'tags,authors',
            id: params.id
        })
        .then(res => {
            setPost(res)
        })
    }, [params])

    const onChange = (e)=>{
        var target = e.target;
        var value = target.value;
        var name = target.name;
        setPost({
            ...post,
            id: params.id,
            [name] : value
        })
        console.log(name, value);
    }

    const onUpdate = (e)=>{
        e.preventDefault();
        var updated_at = new Date();
        setPost({
            ...post,
            updated_at: updated_at.toISOString()
        })
        api.posts
        .edit({
            id: post.id,
            title: post.title,
            custom_excerpt: post.custom_excerpt,
            updated_at: post.updated_at,
            status: post.status
        })
        .then(function(){
            history.push('/home')
        })
        .catch(err => {
            console.log(err);
        })
    }

    const onDelete = (e)=>{
        e.preventDefault();
        api.posts
        .delete({
            id: post.id
        })
        .then(function(){
            let index = IDs.findIndex(id => {
                return post.id === id;
            })
            if(index !== -1){
                IDs.splice(index, 1);
                choiceContext.onUpdateIDs(IDs);
            }
        })
        .then(function(){
            history.push('/home')
        })
        .catch(err => {
            console.log(err);
        })
    }

    return(
        
        <form className="api-form mt-3">
            <legend 
            className="text-center mb-5">Post by {post.authors[0].name}
            </legend>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group mb-4">
                            <label>Title : </label>
                            <input type="text"
                            className="form-control"
                            onChange={onChange}
                            defaultValue={post.title}
                            name="title"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label>Status : </label><br></br>
                            <select
                            value={post.status}
                            onChange={onChange}
                            name="status">
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                            </select>
                        </div>
                        <div className="form-group mb-4">
                            <label>Last update at : </label>
                            <input type="text" 
                            className="form-control no-select"
                            defaultValue={post.updated_at}
                            />
                        </div>
                    
                    </div>
                    <div className="col-lg-6">
                        <img src={post.feature_image} alt="Img here"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                        
                            <label>Custom excerpt : </label>  
                            <textarea 
                            className="form-control" rows="4"
                            onChange={onChange}
                            defaultValue={post.custom_excerpt}
                            name="custom_excerpt"></textarea>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">

                    <button 
                    className="btn btn-info mr-3" 
                    onClick={onUpdate}>
                        <i className="fa fa-check"></i> Update
                    </button>

                    <button 
                    className="btn btn-danger ml-3" 
                    onClick={onDelete}>
                        <i className="fa fa-trash"></i> Delete
                    </button>
                </div>
            </div>

        </form>
        
    )
}

export default PostDetail;