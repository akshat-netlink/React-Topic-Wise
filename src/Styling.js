import React from 'react'
import './style.css'
import style from './custom.module.css'

export default function Styling() {
  return (
    <div>
        <h1 className='primary'>Style type 1: Using style.css file</h1>
        <h1 style={{color:'greenyellow',backgroundColor:'black',textAlign:'center'}}>Style type 2: Inline CSS file</h1>
        <h1 className={style.success}>Style type 3: Using custom.module.css file</h1>
    </div>
  )
}
