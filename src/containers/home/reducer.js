import { fromJS } from 'immutable';
import { GET_USERS, GET_USERS_SUCCESS, GET_USER_DETAILS_SUCCESS, ERROR } from './constants';
import * as _ from 'lodash';

const initialState = fromJS({
  users: [],
  selectedUser: undefined,
  error: false
});

function home(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      if (!_.isUndefined(state.get('selectedUser'))) {
        return state
          .set('selectedUser', undefined);
      }
      return state;
    case GET_USERS_SUCCESS:
      return state
        .set('users', action.users);
    case GET_USER_DETAILS_SUCCESS:
      return state
        .set('selectedUser', action.user);
    case ERROR:
      return state
        .set('error', true);
    default:
      return state;
  }
}

export default home;
