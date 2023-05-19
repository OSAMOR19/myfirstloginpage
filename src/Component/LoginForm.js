import { useState } from "react";
import React from 'react';

function LoginForm({ Login, error}) {
    const [details, setDetails] = useState({name:"", email:"", password:""});

    const submitHandler = e=> {
        e.preventDefault();

        Login(details);
    }
  return (
    <form onSubmit={submitHandler} className="form-inner">
        <div className="form-inner">
            <h2>Login</h2>
            {/* ERROR!!*/}
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name"  id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email"  id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className="form-group">
                <label htmlFor="Password">Password:</label>
                <input type="Password" name="Password"  id="Password" onChange={e => setDetails({...details, passsword: e.target.value})} value={details.password}/>
            </div>
            <div className="form-group">
                <input type="submit" name="LOGIN"  id="LOGIN"/>
            </div>

        </div>
    </form>
  )
}

export default LoginForm;
