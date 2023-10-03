import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {

    const [users,setUsers] = useState([])

    useEffect(()=> {
        loadUsers();
    },[]);

    const loadUsers = async () => {
        const result = await axios.get("https://https://emps-hstg.onrender.com/api/v1/users/users");
        setUsers(result.data);
    }
  return (
    <div className='container'>
        <div className='py-4'>
        <table class="table border shadow">
  <thead>
    <tr> 
      <th scope='col'>ID</th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">LOCATION</th>
      <th scope='col'>ACTION</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
            <tr>
                <th scope='row' key={index}>
                  {index+1}
                </th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.location}</td>
                <td>
                    <button className='btn btn-primary mx-2'>View</button>

                    <Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.id}`}>Edit</Link>  
                    <button className='btn btn-danger mx-2'>Delete</button>
                </td>
            </tr>
        ))
    }
  </tbody>
</table>
        </div>
    </div>
  )
}
