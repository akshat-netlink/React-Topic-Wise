import React, { useState } from 'react'

export default function ConditionalRendering() {
    const [loggedIn,setLoggedIn]=useState(4);

  return (
    <div>
        <h2>
            ConditionalRendering
        </h2>
        {
            loggedIn===1?<h3>User 1 Logged In</h3>
            :loggedIn===2?<h3>User 2 Logged In</h3>
            :<h3>Guest Logged In</h3>
        }
    </div>
  )
}
