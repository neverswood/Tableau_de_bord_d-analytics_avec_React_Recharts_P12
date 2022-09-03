import { useEffect, useState } from 'react';
import { getUser, User } from '../services/User';
import { DashboardHeader } from './DashboardHeader';
import { PanelResults } from './PanelResults';
import { BarChartDailyActivity } from './recharts/BarChartDailyActivity';
import '../styles/Dashboard.scss';

export function Dashboard(): JSX.Element {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    getUser().then(({ data }) => setUserData(data));
  }, []);
  console.log('houp', userData);

  return (
    <div className="dashboard">
      <DashboardHeader userFirstName={userData?.userInfos.firstName} />
      <div className="results">
        <div className="charts">
          <BarChartDailyActivity />
        </div>
        <PanelResults keyData={userData?.keyData} />
      </div>
    </div>
  );
}
