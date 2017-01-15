import { GET_USERS, GET_USERS_SUCCESS, GET_USER_DETAILS, GET_USER_DETAILS_SUCCESS, ERROR } from './constants';
import * as _ from 'lodash';

export function getUsersAction(text) {
  return {
    type: GET_USERS,
    text,
  };
}

export function getUsersSuccess(users) {
  return {
    type: GET_USERS_SUCCESS,
    users,
  };
}

export function getUserDetailsAction(username) {
  return {
    type: GET_USER_DETAILS,
    username,
  };
}

export function getUserDetailsSuccess(user) {
  return {
    type: GET_USER_DETAILS_SUCCESS,
    user,
  };
}

export function error() {
  return {
    type: ERROR,
  };
}
