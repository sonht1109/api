import React from 'react';
import {useHistory} from 'react-router-dom';
import {api} from './GhostAdminAPI'

function AddForm(){

    const history = useHistory();
    let post = {
        title: '',
        custom_excerpt: '',
        pulished_at: '',
        status: 'draft'
    }

    const onChange = (e)=>{
        var target = e.target;
        var name = target.name;
        var value = target.value;
        post.title = name === 'title' ? value : post.title;
        post.custom_excerpt = name === 'custom_excerpt' ? value : post.custom_excerpt;
        post.status = name === 'status' ? value : post.status;
    }

    const onAdd = (e)=>{
        e.preventDefault();
        var pulished_at = new Date();
        post.pulished_at = pulished_at.toISOString();
        api.posts
        .add({
            title: post.title,
            custom_excerpt: post.custom_excerpt,
            status: post.status
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
            className="text-center mb-5">Publish a post
            </legend>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group mb-4">
                            <label>Title : </label>
                            <input type="text"
                            className="form-control"
                            onChange={onChange}
                            name="title"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group mb-4">
                            <label>Status : </label><br></br>
                            <select 
                            name="status"
                            onChange={onChange}>
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                        
                            <label>Custom excerpt : </label>  
                            <textarea 
                            className="form-control" rows="4"
                            onChange={onChange}
                            name="custom_excerpt"></textarea>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <button className="btn btn-info" onClick={onAdd}>
                        <i className="fa fa-check"></i> Add
                    </button>
                </div>
            </div>

        </form>
    )
}

export default AddForm;
