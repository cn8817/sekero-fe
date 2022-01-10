import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

import { useMutation } from 'react-query'
import axios from 'axios'

export default function Login(){

    const [user, setUser] = useState({
        email: '',
        pass: ''
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
        axios
            .post('https://43p44fmhh5.execute-api.us-west-1.amazonaws.com/dev/login', user)
            .then(res => {
                console.log(res)
            })
    }
    
    return(
        <div className='container flex justify-center my-10'>
            <form className='flex flex-col items-center bg-base2 max-w-2xl py-5 px-36 rounded-lg'>
                <h3 className='text-[1.5rem] mb-5'>Login</h3>
                <div className='flex flex-col justify-between mb-20'>
                    <div className='flex flex-col'>
                        <label>Email</label>
                        <input
                            name='email'
                            value={user.email}
                            onChange={handleChange}
                            type='email'
                            placeholder='Email'
                            className='rounded-md mr-6 border-transparent focus:border-text focus:ring-0'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label>Password</label>
                        <input
                            name='pass'
                            value={user.pass}
                            onChange={handleChange}
                            type='password'
                            placeholder='Password'
                            className='rounded-md border-transparent focus:border-text focus:ring-0 max-w-[14.3rem]'
                        />
                    </div>
                </div>
                <button onClick={handleSubmit}>Login</button>
                <p className='small mt-5'>Don't have an account? <Link to='/register'>Sign Up</Link></p>
            </form>
        </div>
    )
}