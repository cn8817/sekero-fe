import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useHistory } from 'react-router-dom'

import { useMutation } from 'react-query'
import axios from 'axios'

export default function Register(){
    const { push } = useHistory()

    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })

    const { mutate, isError, error } = useMutation(createUser)

    if(isError){
        return(error.message)
    }

    async function createUser() {
        const res = await axios.post('https://43p44fmhh5.execute-api.us-west-1.amazonaws.com/dev/register')
        setUser(res.data)
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log(user)
    }

    const handleSubmit = () => {
        console.log(mutate(user))
        push('/')
    }
    
    return(
        <div className='container flex justify-center my-10'>
            <form className='flex flex-col items-center bg-base2 max-w-2xl py-5 px-8 rounded-lg'>
                <h3 className='text-[1.5rem] mb-5'>User Registration</h3>
                <div className='flex flex-row justify-between mb-4'>
                    <div className='flex flex-col'>
                        <label>First Name</label>
                        <input
                            name='firstname'
                            value={user.firstname}
                            onChange={handleChange}
                            type='text'
                            placeholder='First'
                            className='rounded-md mr-6 border-transparent focus:border-text focus:ring-0'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label>Last Name</label>
                        <input
                            name='lastname'
                            value={user.lastname}
                            onChange={handleChange}
                            type='text'
                            placeholder='Last'
                            className='rounded-md border-transparent focus:border-text focus:ring-0'
                        />
                    </div>
                </div>
                <div className='flex flex-row justify-between mb-20'>
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
                            name='password'
                            value={user.password}
                            onChange={handleChange}
                            type='password'
                            placeholder='Password'
                            className='rounded-md border-transparent focus:border-text focus:ring-0'
                        />
                    </div>
                </div>
                <Button variant='secondary' onClick={handleSubmit}>Sign Up</Button>
                <p className='small mt-5'>Already have an account? <Link to='/login'>Log in</Link></p>
            </form>
        </div>
    )
}