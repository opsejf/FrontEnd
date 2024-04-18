import DeleteObject from '../components/deleteFunction.js';

function deleteCall (key) {
    if (confirm("Are you sure you want to delete this property?")) {
      DeleteObject("properties", key)
    }
 
  }

export default deleteCall;