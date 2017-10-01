import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { addSport } from '../../../redux/modules/sports/actions';

const handleAddSport = (values, dispatch) => {
  dispatch(addSport(values))
}

let AddSportForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(handleAddSport)}>
      <div className="container">
        <h2>Add a New Sport</h2>
        <div>
          <label htmlFor="name">Sport Name:</label>
          <Field name="name" component="input" type="text" placeholder="Sport"/>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Add Sport
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Form
          </button>
        </div>
      </div>
    </form>
  )
}

AddSportForm = reduxForm({
  form: 'addSport'
})(AddSportForm)

export default AddSportForm