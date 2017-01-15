const getAllUsers = (state, props) => state.homeReducer.get('users').items;
const getUserDetail = (state, props) => state.homeReducer.get('selectedUser');
const error = (state, props) => state.homeReducer.get('error');

export {
  getAllUsers,
  getUserDetail,
  error,
};
