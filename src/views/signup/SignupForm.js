import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { signup } from '../../redux/modules/auth/actions';

const required = value => value ? undefined : "Required"
const passMatches = (value, allValues) => value !== allValues.password ? "Passwords must match!" : undefined
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined
const usernameLength = value => value.length > 4 && value.length <= 15 ? undefined : "Username must be 5 to 15 characters"

const handleSignUp = (values, dispatch) => {
  const submitValues = JSON.parse(JSON.stringify(values))
  delete submitValues["passwordConfirm"]
  dispatch(signup(submitValues))
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span className="errorSpan">{error}</span>) || (warning && <span className="warnSpan">{warning}</span>))}
  </div>
)

let SignupForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <div className="formEmail">
        <Field name="email" component={renderField} type="email" validate={[email, required]} label="Email"/>
      </div>
      <div className="formPassword">
        <Field name="username" component={renderField} type="text" validate={[required, usernameLength]} label="Username"/>
      </div>
      <div className="formPassword">
        <Field name="password" component={renderField} type="password" validate={[required]} label="Password"/>
      </div>
      <div className="formPassword">
        <Field name="passwordConfirm" component={renderField} type="password" validate={[passMatches, required]} label="Confirm Password"/>
      </div>
      <br />
      <button type="submit">Sign Up!</button>
    </form>
  )
}

SignupForm = reduxForm({
  form: 'signup'
})(SignupForm)

export default SignupForm;