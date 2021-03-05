// add useContext
import React, { useContext } from 'react';
import { firebaseAuth } from '../provider/AuthProvider'
import GoogleSignIn from './GoogleSignIn'


const Signin = () => {


  const { handleSignin, inputs, setInputs, errors } = useContext(firebaseAuth)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit')
    handleSignin()

  }
  const handleChange = e => {
    const { name, value } = e.target
    console.log(inputs)
    setInputs(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      <div className="sign-in">
        <form onSubmit={handleSubmit}>
          {/* replace the div tags with a form tag */}
          <h3>Sign In</h3>
          {/* make inputs  */}
          <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
          <input onChange={handleChange} name="password" placeholder='password' value={inputs.password} />
          <br />
          <button className="sign-in-btn">Sign In</button>
          {errors.length > 0 ? errors.map(error => <p style={{ color: 'red' }}>{error}</p>) : null}
        </form>
        <a href={'/signup'}><button>Create Account</button></a>
        <p>Or</p>
        <GoogleSignIn />
      </div>
    </div>
  );
};

export default Signin;