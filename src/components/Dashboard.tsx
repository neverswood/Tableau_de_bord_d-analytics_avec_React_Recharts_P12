import { useEffect, useState } from 'react';
import { getUser, User } from '../services/User';
import { DashboardHeader } from './DashboardHeader';
import { PanelResults } from './PanelResults';

export function Dashboard() {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    getUser().then(({ data }) => setUserData(data));
  }, []);
  console.log('houp', userData);

  return (
    <div className="dashboard">
      <DashboardHeader userFirstName={userData?.userInfos.firstName} />
      <PanelResults keyData={userData?.keyData} />
    </div>
  );
}
