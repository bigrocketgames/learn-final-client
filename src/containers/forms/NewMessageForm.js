import React from 'react';
import { Field, reduxForm } from 'redux-form';
import 'isomorphic-fetch';
  
  const handleAddMessage = (values, dispatch) => {
    console.log(values);
    // fetch(`${API_URL}/teams`, {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization': "Bearer: " + localStorage.getItem('team.schedule.token')
    //   },
    //   body: JSON.stringify(values)
    // })
    //   .then(dispatch(reset('newMessage')))
    //   .catch(err => {
    //     throw new SubmissionError(err);
    //   })
  }

let NewMessageForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, initialValues } = props
  

  return (
    <form onSubmit={handleSubmit(handleAddMessage)} className="newMessageForm">
      <div>
        <Field name="content" component="textarea" type="text" placeholder="Type your message here."/>
      </div>
      <div>
        <Field name="user_id" component="input" value={initialValues.user_id} type="text" />
      </div>
      <div>
        <Field name="chatRoom_id" component="input" value={initialValues.chatRoom_id} type="text" />
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

NewMessageForm = reduxForm({
  form: 'newMessage'
})(NewMessageForm)

export default NewMessageForm