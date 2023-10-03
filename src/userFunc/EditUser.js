import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigate = useNavigate()

    const {id} = useParams();

    const [user,setUser] = useState({
        name:"",
        email:"",
        location:""
    })

    const {name,email,location} = user;

    const handleSubmit = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        loadUser();
    },[]);

    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.put(`https://corsproxy-hnu5.onrender.com/editUser/${id}`,user)
        navigate("/")
    }

    const loadUser = async ()=>{
        const result = await axios.get(`https://corsproxy-hnu5.onrender.com/getUser/${id}`)
        setUser(result.data);
    }
  return (
    <div className='container'>
        <div>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-cnter m-4'>Edit User</h2>
                <form onSubmit={(e)=> onSubmit(e)}>
                <div className='mb-3'>
                    <div>
                        <label htmlfor='name'  className='form-label'>
                            Name
                        </label>
                    </div>
                    <input  type={'text'} className='form-control' placeholder="Enter your name" name="name" value={name} onChange={(e)=> handleSubmit(e)}/>
                </div>

                <div className='mb-3'>
                    <div>
                        <label htmlfor='email' className='form-label'>
                            Email
                        </label>
                    </div>
                    <input  type={'text'} className='form-control' placeholder="Enter your email" name="email" value={email} onChange={(e) => handleSubmit(e)}/>
                </div>

                <div className='mb-3'>
                    <div>
                        <label htmlfor='location' className='form-label'>
                            Location
                        </label>
                    </div>
                    <input  type={'text'} className='form-control' placeholder="Enter your location" name="location" value={location} onChange={(e)=> handleSubmit(e)}/>
                </div>
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <Link className='btn btn-outline-danger mx-2' to='/'>Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
