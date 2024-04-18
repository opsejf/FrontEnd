import react, { useState } from 'react';
import { ReactDOM } from 'react';
import properties from '../database/Properties.json';
import '../styles/form.css';


export default function (props){
    
    const[firstName,setfirstName] = useState("");
    const[lastName, setlastName] = useState("");
    const[email, setemail] = useState("");
    const[telephone, settelephone] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        let Sellerslist = properties.sellers;
        let sellerlength = Sellerslist.length;
        let id = sellerlength +1 ;   


        let dataItem ={
            ID: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            telephone: telephone
        }
    


        fetch('http://localhost:8080/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataItem),
        })
        .then(Response => Response.json())
        .then(dataItem => console.log(dataItem))
        .catch((error) =>console.error('error:',error))

        window.location.reload();

    }


return(
    <form id = "form1" onSubmit={(event) => {handleSubmit(event)}}>
        <fieldset className = "wrapper">
            <legend className = "title">Register As A New Seller</legend>
            <br />

            <b className='labels'>First Name</b>
                <input 
                    type = "text"
                    name = "firstName"
                    id ="firstName"
                    onChange={(event => setfirstName(event.target.value))} 
                    required="required"
                    className='fields'
                    placeholder="John" 
                />
            <br/>

            <b className='labels'>Last Name</b>
                <input
                 type = "text"
                 name = "lastName"
                 id ="lastName"
                 onChange={(event => setlastName(event.target.value))} 
                required="required"
                className='fields'
                placeholder="Doe" 
                />
            <br/>

            <b className='labels'>Email</b>
                <input
                type = "email"
                name = "email"
                id ="email"
                onChange={(event => setemail(event.target.value))} 
                required="required"
                className='fields'
                placeholder="johndoe@gmail.com" 
                />
            <br/>
            <b className='labels'>Telephone</b>
                <input
                type = "text"
                name = "telephone"
                id = "telephone"
                onChange={(event => settelephone(event.target.value))} 
                required="required"
                className='fields'
                placeholder="01234567891" 
                />
            <br/>
            <br />
            <button className='submit' form = "form1"> Save  </button>
        </fieldset>
    </form>
)
}

