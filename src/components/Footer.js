import React, { Component } from 'react'

class Footer extends Component{

    constructor(props){
        super(props);
        this.state={
            page: "1"
        }
    }


    setPaging=(e)=>{
        var value = e.target.getAttribute('data-index');
        this.props.onPaging(value);
        this.setState({
            page: value
        })
    }

    render(){
        return (
            <div className="footer">

                <span
                className =
                {this.state.page === "1" ? "page-index active" : "page-index"}
                data-index={"1"}
                onClick={this.setPaging}>
                    1
                </span>

                <span
                className =
                {this.state.page === "2" ? "page-index active" : "page-index"}
                data-index={"2"}
                onClick={this.setPaging}>
                    2
                </span>

                <span
                className =
                {this.state.page === "3" ? "page-index active" : "page-index"}
                data-index={"3"}
                onClick={this.setPaging}>
                    3
                </span>

            </div>
        )
    }
}
export default Footer;