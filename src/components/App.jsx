import user from 'data/user';
import css from './App.module.css';
import { ProfileDescription } from './profile/ProfileDescription';
import { ProfileStats } from './stats/ProfileStats';
export const App = () => {
  return (
    <div className={css.profile}>
      <ProfileDescription
        avatar={user.avatar}
        location={user.location}
        tag={user.tag}
        username={user.username}
      />
      <ProfileStats
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
};
