import React from 'react';

function UserName(props) {
  return (
    <div className={`${props.namespace}__text ${props.namespace}--font`}>{props.username}</div>
  );
}

UserName.propTypes = {
  namespace: React.PropTypes.string,
  username: React.PropTypes.string,
};

export default UserName;
