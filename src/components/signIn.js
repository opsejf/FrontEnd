import '../styles/signIn.css';
import React, { useState } from 'react';
import Properties from '../database/Properties.json';
import axios from 'axios';


export default function SignIn({setToken}){

     function handleSubmit(event){
        event.preventDefault();
    
        const email = event.target.email.value;
        const password =  event.target.password.value




        const response =  axios.post("http://localhost:8080/authenticate",
        {email: email,
        password: password})
        .then((response) => {
            const token = response.data;
            return setToken(token)
        })
        .catch(err => {
            console.error(err);
        })
    }

    return (
        // creating actual form
        <form id="form1" onSubmit={(event) => {
            handleSubmit(event);
        }}>
            <fieldset className="wrapper-sign-in">
                    <legend className="sign-in-title">Sign in</legend>
                    <br></br>
                    <b className='sign-in-labels'>Email or Username</b>
                    <input className='sign-in-fields' type='text'  name='email'  required="required"></input>
                    <br/>
                    
                    <b className='sign-in-labels'>Password</b>
                    <input className='sign-in-fields' type='password' name='password' required="required"></input>
                    <br />
                    <button className='submit-sign-in' type="submit" form="form1">Sign in</button>
            </fieldset>
        </form>
    );
};