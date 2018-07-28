import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducer as form } from 'redux-form';
import auth from '../modules/auth/reducer';
import sports from '../modules/sports/reducer';
import subSports from '../modules/subsports/reducer';
import users from '../modules/users/reducer';
import teams from '../modules/teams/reducer';
import schedules from '../modules/schedule/reducer';
import userTeams from '../modules/userteams/reducer';
import games from '../modules/games/reducer';
import chatRooms from '../modules/chatrooms/reducer';
import seasons from '../modules/seasons/reducer';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const reducers = combineReducers({
  form,
  auth,
  sports,
  subSports,
  users,
  teams,
  schedules,
  userTeams,
  games,
  chatRooms,
  seasons
})

const middleware = [thunk]

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
)

const store = createStore(
  reducers,
  persistedState, 
  enhancer
)

store.subscribe(() => {
  saveState({
    auth: store.getState().auth
  });
});

export default store;