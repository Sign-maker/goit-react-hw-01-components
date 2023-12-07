import user from 'datajson/user';
import data from 'datajson/data.json';
import friends from 'datajson/friends.json';
import transactions from 'datajson/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <>
      <Profile user={user}></Profile>
      <Statistics title="Upload stats" data={data}></Statistics>
      <Statistics data={data}></Statistics>
    </>
  );
};
