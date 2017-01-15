import { call, put } from 'redux-saga/effects';
import { getUserDetailsSuccess, error } from '../actions';
import request from '../../../utils/request';
import { githubApiGetUser } from '../../../utils/constants';

function* fetchUser(action) {
  const requestURL = `${githubApiGetUser}/${action.username}`;
  const user = yield call(request, requestURL);
  if (user) {
    yield put(getUserDetailsSuccess(user));
  } else {
    yield put(error());
  }
}

export default fetchUser;
