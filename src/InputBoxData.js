import React, { useState } from 'react'

export default function InputBoxData() {
  const [data,setData]=useState(null);
  const [print,setPrint]=useState(false);

  function printData(){
    setPrint(true);
  }

  function getData(val){
    
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }

  return (
    <div>
        <h1>
        InputBoxData
        </h1>
        <label>
          Value:
          <input type="text" onChange={getData}/>
        </label>
        {
          print?
          <p>{data}</p>
          :
          null
        }
        <button onClick={printData}>Print Data</button>
        
    </div>
  )
}
