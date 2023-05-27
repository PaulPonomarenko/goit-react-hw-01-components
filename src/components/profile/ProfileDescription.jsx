import PropTypes from 'prop-types';
import css from './ProfileDescription.module.css';

export const ProfileDescription = ({ avatar, username, tag, location }) => {
  return (
    <div className={css.description}>
      <img src={avatar} alt={username} className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
  );
};
ProfileDescription.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
