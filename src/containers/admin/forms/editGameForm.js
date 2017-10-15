import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { updateGame } from '../../../redux/modules/games/actions';

const handleEditGame = (values, dispatch, props) => {
  if(values.game_time === undefined) {
    values.game_time = props.game.game_time
  }
  if(values.location === undefined) {
    values.location = props.game.location
  }
  dispatch(updateGame(values, props.game.id));
}

let EditGameForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(handleEditGame)} className="editGameForm">
      <div>
        <h2 className="text-center">Edit Game:</h2>
        <h4>{props.game.away_team.fullname} @ {props.game.home_team.fullname}</h4>
      </div>
      <div>
        <label htmlFor="game_time">Game Time: </label>
        <Field name="game_time" component="input" type="text" placeholder={props.game.game_time}/>
      </div>
      <div>
        <label htmlFor="location">Game Location:</label>
        <Field name="location" component="input" type="text" placeholder={props.game.location}/>
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

export default EditGameForm;