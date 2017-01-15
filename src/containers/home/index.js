import React, { Component } from 'react';
import { connect } from 'react-redux';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import { getUsersAction, getUserDetailsAction } from './actions';
import { getAllUsers, getUserDetail, error } from './selectors';
import UserAvatar from './inner-components/user-avatar';
import UserName from './inner-components/user-name';
import Userdetails from './inner-components/user-details';
import * as _ from 'lodash';
const namespace = 'github-users';
const menuItemNamespace= 'menu-item';

class Home extends Component {
  constructor(props) {
    super(props);
    this.goToGithub = this.goToGithub.bind(this);
    this.fetchUserDetails = this.fetchUserDetails.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
  }

  dataSource(users) {
    const newDataSource = [];
    _.each(users, (user) => {
      newDataSource.push({ text: user.login, value: (
        <MenuItem
          className={`${menuItemNamespace}--bottom-border`}
          primaryText={<UserAvatar namespace={menuItemNamespace} avatar_url={user.avatar_url} />}
          secondaryText={<UserName namespace={menuItemNamespace} username={user.login} />}
        />) });
    });
    return newDataSource;
  }

  handleUpdateInput(value) {
    this.props.dispatchGetUsersAction(value);
  }

  fetchUserDetails(value) {
    this.props.dispatchGetUserDetailsAction(value.text);
  }

  goToGithub() {
    window.location = this.props.userDetails.html_url;
  }

  render() {
    return (
      <div className={`container ${namespace}`}>
        <div className="row middle-md">
          <div className={`col-md-6 col-md-offset-3 col-xs-12 ${namespace}__title`}>
            <p className={`${namespace}--size`}>Github Users Index</p>
          </div>
          <div className="col-md-4 col-md-offset-4 col-xs-12">
            <AutoComplete
              hintText="Search github user"
              dataSource={this.dataSource(this.props.users)}
              onUpdateInput={this.handleUpdateInput}
              onNewRequest={this.fetchUserDetails}
              floatingLabelText="Github user"
              fullWidth={true}
            />
          </div>
        </div>
        <div className="row middle-md">
          <div className={`col-md-6 col-md-offset-3 col-xs-12 ${namespace}__card`}>
            {this.props.userDetails ? <Userdetails user={this.props.userDetails} goToGithub={this.goToGithub} /> : null}
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  dispatchGetUsersAction: React.PropTypes.func,
  dispatchGetUserDetailsAction: React.PropTypes.func,
  userDetails: React.PropTypes.object,
  users: React.PropTypes.array,

};

export function mapDispatchToProps(dispatch) {
  return {
    dispatchGetUsersAction: (text) => dispatch(getUsersAction(text)),
    dispatchGetUserDetailsAction: (value) => dispatch(getUserDetailsAction(value)),
  };
}

const mapStateToProps = (state, props) => {
  return {
    users: getAllUsers(state, props),
    userDetails: getUserDetail(state, props),
    error: error(state, props),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
