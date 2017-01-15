import { call, put } from 'redux-saga/effects';
import { getUsersSuccess, error } from '../actions';
import request from '../../../utils/request';
import { githubApiGetAllUsers, githubToken } from '../../../utils/constants';

function* fetchAllUsers(action) {
  const requestURL = `${githubApiGetAllUsers}?q=${action.text.length === 0 ? 'ccioloca' : action.text}&&access_token=${githubToken}`;
  const users = yield call(request, requestURL);
  if (users) {
    yield put(getUsersSuccess(users));
  } else {
    yield put(error());
  }
}

export default fetchAllUsers;
