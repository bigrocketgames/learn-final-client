import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { addSubSport } from '../../../redux/modules/subsports/actions';

const handleAddSubSport = (values, dispatch) => {
  if (values.conference_split === undefined) {
    values.conference_split = false;
  }
  values.sport_id = Number(values.sport_id)
  dispatch(addSubSport(values))
}

let AddSubSportForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(handleAddSubSport)} className="subSportForm">
      <div className="container">
        <h2>Add a New Sub Sport</h2>
        <div>
          <label htmlFor="name">Sub Sport Name: </label>
          <Field name="name" component="input" type="text" placeholder="Sub Sport"/>
        </div>
        <div>
          <label htmlFor="conference_split">Conference Split? </label>
          <Field name="conference_split" id="conference_split" component="input" type="checkbox" />
        </div>
          <label htmlFor="sport_id">Sport: </label>
          <Field name="sport_id" component="select">
            <option value="">Choose a Sport</option>
            {props.sports.map(sportOption => 
              <option value={sportOption.id} key={sportOption.id}>
                {sportOption.name}
              </option>
            )}
          </Field>
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

AddSubSportForm = reduxForm({
  form: 'addSubSport'
})(AddSubSportForm)

AddSubSportForm = connect(
  state => ({
    sports: state.sports
  })
)(AddSubSportForm)

export default AddSubSportForm