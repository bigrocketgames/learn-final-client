import React from 'react';
import { Field, reduxForm } from 'redux-form';
import 'isomorphic-fetch';

import { addMessage } from '../../redux/modules/messages/actions';
  
  const handleAddMessage = (values, dispatch) => {
    dispatch(addMessage(values))
      .then(values.content = "");
  }

let NewMessageForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, initialValues } = props
  

  return (
    <form onSubmit={handleSubmit(handleAddMessage)} className="newMessageForm">
      <div>
        <Field name="content" component="textarea" type="text" placeholder="Type your message here."/>
      </div>
      <div>
        <Field name="user_id" component="input" value={initialValues.user_id} type="hidden" />
      </div>
      <div>
        <Field name="chatRoom_id" component="input" value={initialValues.chat_room_id} type="hidden" />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Reset Form
        </button>
      </div>
    </form>
  )
}

NewMessageForm = reduxForm({
  form: 'newMessage'
})(NewMessageForm)

export default NewMessageForm