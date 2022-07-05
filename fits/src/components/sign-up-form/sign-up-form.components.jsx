
import { useState } from "react";

import { createAuthUserFromEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

  const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  passwordConfirm: '',
}

const SignUpForm = () => {
  const [formFields,setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, passwordConfirm} = formFields;

  const resetFormFields = () => {
    setFormFields();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== passwordConfirm) {
      alert('Passwords do not match')
      return;
    }

    try {
      const {user} = await createAuthUserFromEmailAndPassword(email, password)

      await createUserDocumentFromAuth(user, {displayName})
      resetFormFields();
      
    } catch(error) {
      if(error.code === 'auth/email-already-in-use'){
        alert('Email already in use')
      } else {
      console.log('user creation encountered an error', error)
      }
    }

  };

  const handleChange = (event) => {
    const {name, value} = event.target; 

    setFormFields({...formFields, [name]: value})
  }

  return(
    <div>
      <h1>Please register with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input type='text' required onChange={handleChange} name='displayName' value={displayName}/>

        <label>Email</label>
        <input type='email ' required onChange={handleChange} name='email' value={email}/>

        <label>Password</label>
        <input type='password' required onChange={handleChange} name='password' value={password}/>

        <label>Password Confirmation</label>
        <input type='password' required onChange={handleChange} name='passwordConfirm' value={passwordConfirm}/>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm;