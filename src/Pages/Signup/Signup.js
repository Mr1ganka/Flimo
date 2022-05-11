import React from 'react'
import './signup.css'
import { Form, Button, Card, Alert  } from 'react-bootstrap'
import { useRef, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {useAuth} from '../../Components/contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

const emailRef = useRef()
const passwordRef = useRef()
const passwordConfirmationRef = useRef()
const { signup } = useAuth()
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
const navigate=useNavigate()

async function handleSubmit(e){
    e.preventDefault()

    if(passwordRef.current.value !== 
        passwordConfirmationRef.current.value){
            return setError('Passwords do not match')
        }

    try
    { setError('')
    setLoading(true)
        await signup(emailRef.current.value,passwordRef.current.value)
        navigate("/login")
    }catch{
        setError("Failed to create account")
    }
    setLoading(false)
}

  return (
    
        <>
        
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>
                {/* {currentUser.email} */}
                {error &&<Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label className='color'>Email </Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>

                    <Form.Group id="password">
                        <Form.Label>
                           Password 
                        </Form.Label>
                        <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>

                        <Form.Group id="password-confirm">
                        <Form.Label>
                           Password Confirmation
                        </Form.Label>
                        <Form.Control type="password" ref={passwordConfirmationRef} required/>
                    </Form.Group>

                    <Button disabled={loading} className='w-100' type="submit">Sign Up</Button>
                    <div className='w-100 text-center mt-2'>
            Already have an account? <Link to="/login">Log in</Link>
        </div>
                </Form>
            </Card.Body>

        </Card>
        {/* <div className='w-100 text-center mt-2 info'>
            Already have an account? Log In
        </div> */}
        </>
  )
}

export default Signup;