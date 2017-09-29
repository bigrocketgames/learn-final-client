import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { addTeam } from '../../../redux/modules/teams/actions';

const handleAddTeam = (values, dispatch) => {
  values.sub_sport_id = Number(values.sub_sport_id)
  dispatch(addTeam(values))
}

let AddTeamForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(handleAddTeam)} className="addTeamForm">
      <div className="container">
        <h2>Add a New Team</h2>
        <div>
          <label htmlFor="name">Team Name: </label>
          <Field name="name" component="input" type="text" placeholder="Team Name"/>
        </div>
        <div>
          <label htmlFor="mascot">Mascot: </label>
          <Field name="mascot" component="input" type="text" placeholder="Mascot"/>
        </div>
        <div>
          <label htmlFor="stadium_location">Stadium Location: </label>
          <Field name="stadium_location" component="input" type="text" placeholder="Seattle, WA"/>
        </div>
        <div>
          <label htmlFor="sub_sport_id">Sub Sport: </label>
          <Field name="sub_sport_id" component="select">
            <option value="">Choose a Sub Sport</option>
            {props.subSports.map(subSportOption => 
              <option value={subSportOption.id} key={subSportOption.id}>
                {subSportOption.name}
              </option>
            )}
          </Field>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Add Team
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Form
          </button>
        </div>
      </div>
    </form>
  )
}

AddTeamForm = reduxForm({
  form: 'addTeam'
})(AddTeamForm)

AddTeamForm = connect(
  state => ({
    subSports: state.subSports
  })
)(AddTeamForm)

export default AddTeamForm