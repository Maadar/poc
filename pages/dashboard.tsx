import { NextPage } from 'next';
import LoggedIn from '../features/LoggedIn';
import Guard from "../guards/guard";

const Dashboard: NextPage = () => {
  return (
    <Guard>
      <LoggedIn />
    </Guard>
  )
};

export default Dashboard;
