import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { signup } from '../../redux/modules/auth/actions';

const handleSignUp = (values, dispatch) => {
  dispatch(signup(values))
}

let SignupForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Sign Up!</button>
    </form>
  )
}

SignupForm = reduxForm({
  form: 'signup'
})(SignupForm)

export default SignupForm;