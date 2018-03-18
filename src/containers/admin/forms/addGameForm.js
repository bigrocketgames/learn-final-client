import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { addGame } from '../../../redux/modules/games/actions';

const handleAddGame = (values, dispatch) => {
  dispatch(addGame(values));
}

let AddGameForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(handleAddGame)} className="addGameForm">
      <div className="container">
        <h2 className="text-center">Add Game</h2>
      </div>
      <div>
        <label htmlFor="away_team_id">Away Team: </label>
        <Field name="away_team_id" component="select">
          <option value="">Away Team:</option>
          {props.teams.length > 0 && props.teams.map(team => 
            <option value={team.id} key={team.id}>
              {team.fullname}
            </option>
          )}
        </Field>
      </div>
      <div>
        <label htmlFor="home_team_id">Home Team: </label>
        <Field name="home_team_id" component="select">
          <option value="">Home Team:</option>
          {props.teams.length > 0 && props.teams.map(team => 
            <option value={team.id} key={team.id}>
              {team.fullname}
            </option>
          )}
        </Field>
      </div>
      <div>
        <label htmlFor="game_time">Game Time: </label>
        <Field name="game_time" component="input" type="text" placeholder="2017-09-10 20:00"/>
      </div>
      <div>
        <label htmlFor="location">Game Location:</label>
        <Field name="location" component="input" type="text" placeholder="Seattle, WA"/>
        <span className="formInputSpan">*Only use this box if game isn't played at the home team's normal stadium*</span>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Undo Changes
        </button>
      </div>
    </form>
  )
}

AddGameForm = reduxForm({
  form: 'addGame'
})(AddGameForm)

AddGameForm = connect(
  state => ({
    teams: state.teams
  })
)(AddGameForm)

export default AddGameForm;