import axios from 'axios';
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate = useNavigate()

    const [user,setUser] = useState({
        name:"",
        email:"",
        location:""
    })

    const {name,email,location} = user;

    const handleSubmit = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.post("https://corsproxy-hnu5.onrender.com/addUser",user)
        navigate("/")
    }
  return (
    <div className='container'>
        <div>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-cnter m-4'>Register User</h2>
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
