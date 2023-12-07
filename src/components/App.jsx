import user from 'datajson/user';
import data from 'datajson/data.json';
import friends from 'datajson/friends.json';
import transactions from 'datajson/transactions.json';
import { Profile } from './Profile/Profile';

export const App = () => {
  console.log(user);
  return (
    <>
      <Profile user={user}></Profile>
    </>
  );
};
