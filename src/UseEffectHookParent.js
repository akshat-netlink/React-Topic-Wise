import React, { useState } from 'react'
import UseEffectHookChild from './UseEffectHookChild';

export default function UseEffectHookParent() {

    const[count,setCount]=useState(10);
    const[data,setData]=useState(100);
  return (
    <div>
        <UseEffectHookChild count={count} data={data}/>
        <button onClick={()=>{setCount(count+1)}} >Update Count</button>
        <button onClick={()=>{setData(data+1)}}>Update Data</button>
    </div>
  )
}
