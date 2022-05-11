import React from 'react'
import './login.css'
import { Form, Button, Card, Alert  } from 'react-bootstrap'
import { useRef, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {useAuth} from '../../Components/contexts/AuthContext'
import { Link } from 'react-router-dom'

const Login = () => {
const emailRef = useRef()
const passwordRef = useRef()

const { signup } = useAuth()
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)

async function handleSubmit(e){
    e.preventDefault()

    try
    { setError('')
    setLoading(true)
        await signup(emailRef.current.value,passwordRef.current.value)
    }catch{
        setError("Failed to create account")
    }
    setLoading(false)
}

  return (
    
        <>
        
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Login</h2>
                
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


                    <Button disabled={loading} className='w-100' type="submit">Login</Button>
                    <div className='w-100 text-center mt-2'>
            Need an account? <Link to="/" >Sign Up</Link>
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

export default Login;