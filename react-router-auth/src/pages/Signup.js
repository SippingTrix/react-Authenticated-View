import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from "./logo.jpg";
import { Card, Logo, Form, Input, Button } from '../components/AuthForm'

function Signup() {
    return (
        <Card>
            <Logo src={logoImg} />
            <Form>
                <Input type="email" placeholder="email" />
                <Input type="password" placeholder="password" />
                <Input type="password" placeholder="password again" />
                { <Button>Sign Up</Button> /* should post database creating a new user */}
            </Form>
            <Link to="/login">Already have an account?</Link>
        </Card>
    )
}

export default Signup