import React from 'react';

let databaseURL = "http://localhost:8000";
// fetch API to delete an object, takes the type of object (buyers, sellers or properties)
// and id to index the database and then remove the object if it is found
async function removeObject(object, id) {
    fetch(databaseURL + "/" + object + "/" + id, {
        method: 'DELETE',
    }).then(() => {
    console.log('removed');
}).catch(error => {
    console.log(error)
})
    }

export default removeObject;