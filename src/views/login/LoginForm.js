import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { login } from '../../redux/modules/auth/actions';

const handleLogin = (values, dispatch) => {
  dispatch(login(values))
}

let LoginForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="formEmail">
        <label htmlFor="email">Email or username</label>
        <Field name="email" component="input" type="text" required/>
      </div>
      <div className="formPassword">
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" required/>
      </div>
      <br />
      <button type="submit">Log In</button>
    </form>
  )
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginForm;