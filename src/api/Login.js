import React from 'react';

function Login(){
    return(
        <div className="form">
            <legend className="text-center mb-3">Login</legend>
            <div className="input">
                <input type="text" placeholder="Username"></input>
            </div>

            <br></br>

            <div className="input">
                <input type="password" placeholder="Password"></input>
            </div>

            <button type="submit"
            className="btn btn-info mt-5"
            // onClick={onSubmit}
            >Login
            </button>

        </div>
    )
}

export default Login;