import React from 'react';

function UserAvatar(props) {
  return (
    <img src={props.avatar_url} className={`${props.namespace}__avatar`} width={35} height={35} role="presentation" />
  );
}

UserAvatar.propTypes = {
  avatar_url: React.PropTypes.string,
  namespace: React.PropTypes.string,
};

export default UserAvatar;
