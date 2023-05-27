import user from 'data/user';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import data from 'data/data';
import friends from 'data/friends';
import { FriendList } from './friendList/FriendList';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
    </>
  );
};
