import { user } from 'datajson/user';
import { Profile } from './Profile/Profile';

export const App = () => {
  return (
    <>
      <Profile user={user}></Profile>
    </>
  );
};