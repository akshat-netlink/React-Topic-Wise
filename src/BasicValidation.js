import React, { useState } from 'react'

export default function BasicValidation() {

    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [UserErr, setUserErr] = useState(false);

    function saveData(e){
        console.log(e)
        e.preventDefault();

    }

    function UserHandler(e){
        let item=e.target.value;
        if(item.length==0 || item.length<4){
            setUserErr(true)
        }
        else{
            setUserErr(false)
        }
    }

  return (
    <div>
        <h1>User Validation</h1>
        <form onSubmit={saveData}>
            <input placeholder='Enter a Name' type="text" onChange={UserHandler} />{
                UserErr?<span style={{color:"red"}}>User Name Invalid</span>:""
            }
            <br/><br/>
            <input placeholder='Enter Password' type="text"/><br/><br/>
            <button type="submit"  disabled={UserErr}>Submit</button>
        </form>
    </div>
  )
}
