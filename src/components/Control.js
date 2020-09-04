import React, { Component } from 'react';

class Control extends Component{

    constructor(props){
        super(props);
        this.state={
            key: ''
        }
    }

    onSearch = (e)=>{
        this.props.onSearch(e.target.value);
    }

    onSort=(e)=>{
        this.props.onSort(e.target.value);
    }

    render(){
        return(
            <div className="control">
                <input
                type="text"
                placeholder="Keyword (Title)"
                onChange={this.onSearch}
                >
                </input>

                <select className="ml-4" onChange={this.onSort}>
                    <option value={''}>None</option>
                    <option value={"title ASC"}>Title</option>
                    {/* a-z : asc | z-a : desc */}
                    <option value={"comment_id ASC"}>Comment ID</option>
                </select>
            </div>
        )
    }
}

export default Control;