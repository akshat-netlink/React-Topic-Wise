import React from 'react'
import { Table } from 'react-bootstrap'

export default function NestedArray() {
    const users=[
        {name:'demo1',address:[
            {number:'1',city:'c1'},
            {number:'2',city:'c2'},
            {number:'3',city:'c3'}
        ]},
        {name:'demo2',address:[
            {number:'1',city:'c1'},
            {number:'2',city:'c2'},
            {number:'3',city:'c3'}
        ]},
        {name:'demo3',address:[
            {number:'1',city:'c1'},
            {number:'2',city:'c2'},
            {number:'3',city:'c3'}
        ]}
    ]
  return (
    <div>
        <Table>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Address</td>
                </tr>
                {
                    users.map((user)=>
                        
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.address.map((address)=>
                                <tr>
                                    <td>{address.number}</td>
                                    <td>{address.city}</td>
                                </tr>
                                )}</td>
                            </tr>
                        
                    )
                }
            </tbody>
        </Table>
    </div>
  )
}
