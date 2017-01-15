import React from 'react';
import githubIcon from '../../../static/images/github.ico';
const namespace = 'card';

function UserDetails(props) {
  return (
    <div className={`${namespace}__container`}>
      <div className={`${namespace}__wrapper`}>
        <div className={`${namespace}__main-window`}>
          <div className={`${namespace}__user-image`}>
            <div className={`${namespace}__user-image__wrapper`}>
              <img className={`${namespace}__user-image--position`} src={props.user.avatar_url} role="presentation" />
            </div>
            <div className={`${namespace}__add-button`}>
              <img src={githubIcon} role="presentation" onClick={props.goToGithub} />
            </div>
            <div className={`${namespace}__username ${namespace}__username--size ${namespace}--ellipsis`}>{props.user.name}</div>
          </div>
          <div className={`${namespace}__user-info`}>
            <div className={`${namespace}__quote ${namespace}__quote--size ${namespace}--ellipsis`}>{props.user.bio}</div>
          </div>
          <div className={`${namespace}__social-info`}>
            <div className={`${namespace}__social-info-elm ${namespace}__social-info-elm--font`}>FOLLOWERS<br /><span className={`${namespace}--text-size`}>{props.user.followers}</span></div>
            <div className={`${namespace}__social-info-elm ${namespace}__social-info-elm--font`}>FOLLOWING<br /><span className={`${namespace}--text-size`}>{props.user.following}</span></div>
            <div className={`${namespace}__social-info-elm ${namespace}__social-info-elm--font`}>REPOS<br /><span className={`${namespace}--text-size`}>{props.user.public_repos}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

UserDetails.propTypes = {
  user: React.PropTypes.object,
  goToGithub: React.PropTypes.func,
};

export default UserDetails;
