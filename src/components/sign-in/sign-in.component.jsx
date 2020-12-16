import React, { useState } from 'react'

import FormInput from '../form-input/form-input.component'

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        return
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={e => handleSubmit(e)}>
                <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    value={email}
                    handleChange={setEmail}
                    required />
                <FormInput
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    handleChange={setPassword}
                    required />

                <FormInput type="submit" value="Submit Form" />
            </form>
        </div>
    )
}

export default SignIn
