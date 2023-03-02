import React, { useEffect } from 'react'

export default function UseEffectHookChild(props) {

    useEffect(()=>{
        console.log("UseEffect called for Updating Count]")
    },[props.count]);

    useEffect(()=>{
        console.log("UseEffect called for Updating Data]")
    },[props.data]);
    

  return (
    <>
        <h3>Count Props: {props.count} </h3>
        <h3>Data Props: {props.data}</h3>
    </>
  )
}
