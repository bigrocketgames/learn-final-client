import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

const handleEditGame = (values, dispatch, props) => {
  if(values.game_time === undefined) {
    values.game_time = props.games.game_time
  }
  if(values.location === undefined) {
    values.location = props.games.location
  }
  debugger
}

let EditGameForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(handleEditGame)} className="editGameForm">
      <div className="container">
        <h2 className="text-center">Edit Game</h2>
      </div>
      <div>
        <label htmlFor="game_time">Game Time: </label>
        <Field name="game_time" component="input" type="text" placeholder={props.games.game_time}/>
      </div>
      <div>
        <label htmlFor="location">Game Location:</label>
        <Field name="location" component="input" type="text" placeholder={props.games.location}/>
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

EditGameForm = reduxForm({
  form: 'editGame'
})(EditGameForm)

EditGameForm = connect(
  state => ({
    games: state.games,
    teams: state.teams
  })
)(EditGameForm)

export default EditGameForm;