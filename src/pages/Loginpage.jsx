
import React, { useState,useEffect } from 'react'
import {useAuth} from '../AuthContext/AuthContext';
import {useNavigate, useSearchParams } from "react-router-dom";

const Loginpage = () => {
    const {isAuthenticated,login,user}=useAuth();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        if(isAuthenticated) {
            const redirect = searchParams.get('redirect') || '';
            // const redirect  = location.state?.redirect || ''
            navigate(`${redirect ? redirect : '/clothes/men'}`, { replace: true });
        }
    }, [isAuthenticated])

    const [data,setData]=useState({email:'',password:''});
    function handleChange(e){
     setData({...data,[e.target.name]:e.target.value});

    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        login(data)

    }
    console.log(user)
  return (
    <div className='flex justify-center items-center h-lvh'>
    <div className='max-w-[500px] shadow-xl p-4 rounded-md'>
        <h1 className='text-center mb-10 text-xl'>Login Page</h1>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='your Email' name='email' value={data.email} onChange={handleChange} className='w-full py-2 px-4 border border-blue-500 rounded-md'/>
        <input type='password' placeholder='your Password' name='password' value={data.password} onChange={handleChange} className='w-full py-2 px-4 mt-2 border border-blue-500 rounded-md'/>
        <button className='w-full mt-8 bg-blue-400 text-white rounded-md py-2'>LogIn</button>

        </form>
        </div>
    </div>
  )
}

export default Loginpage