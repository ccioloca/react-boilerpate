import { fork, takeLatest } from 'redux-saga/effects';
import { GET_USERS, GET_USER_DETAILS } from '../containers/home/constants';
import fetchUsers from '../containers/home/sagas/fetch-all-users';
import fetchUserDetails from '../containers/home/sagas/fetch-user-details';

export function* mySaga() {
  yield fork(takeLatest, GET_USERS, fetchUsers);
  yield fork(takeLatest, GET_USER_DETAILS, fetchUserDetails);
}

export default mySaga;
