import React, { useState } from 'react'

export default function RegisterForm() {

    const [name,setName]=useState("");
    const [option, setOption]=useState("");
    const [tnc, setTnc]=useState(false);

    function getFormData(e){

        var data={
            name: name,
            option: option,
            tnc: tnc
        }
        console.log(data);
        e.preventDefault();
    }

  return (
    <div>
        <h1>Basic Form</h1>
        <form onSubmit={getFormData}>
            <label>
                Name: 
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
            </label><br/><br/>
            <label>
                Select Options: 
                <select onChange={(e)=>setOption(e.target.value)}>
                    <option value="">Please Select......</option>
                    <option>Option A</option>
                    <option>Option B</option>
                    <option>Option C</option>
                </select>
            </label><br/><br/>
            <label>
                Terms & Conditions
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/>
            </label><br/><br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
