import React from "react";
import { Table } from "react-bootstrap";

export default function ArrayLists() {
  const employees = [
    { name: "User 1", email: "user1@test.com", phone: 1234 },
    { name: "User 2", email: "user2@test.com", phone: 1234 },
    { name: "User 3", email: "user3@test.com", phone: 1234 },
    { name: "User 4", email: "user4@test.com", phone: 1234 },
  ];
  return (
    <>
    <h2>react-bootstrap table</h2>
      <Table>
        <tbody>
        <tr>
            <th># S.No.</th>
            <th >Name</th>
            <th >Email</th>
            <th >Phone</th>
        </tr>
            {
                employees.map((item,i)=>
                    item.phone===1234?<tr key={i}>
                    <td>{i+1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>:null
                    
                )
            }
            </tbody>
      </Table>
    </>
  );
}
