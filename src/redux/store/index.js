import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import auth from '../modules/auth/reducer';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const reducers = combineReducers({
  form,
  auth,
})

const middleware = [thunk]

const store = createStore(
  reducers, persistedState,
  compose (
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

store.subscribe(() => {
  saveState({
    auth: store.getState().auth
  });
});

export default store;