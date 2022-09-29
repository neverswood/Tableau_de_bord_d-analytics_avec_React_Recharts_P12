import { useEffect, useState } from 'react';
import { getUser, User } from '../../services/User';

import './Dashboard.scss';
import { BarChartDailyActivity } from '../recharts/BarChartDailyActivity/BarChartDailyActivity';
import { PieChartObjective } from '../recharts/PieChartObjective/PieChartObjective';
import { RadarChartPerformances } from '../recharts/RadarChartPerformances/RadarChartPerformances';
import { LineChartSessionDuration } from '../recharts/LineChartSessionDuration/LineChartSessionDuration';
import { DashboardHeader } from './DashboardHeader/DashboardHeader';
import { PanelResults } from '../PanelResults/PanelResults';
import UserDataModel from '../../services/models/UserDataModel';

export function Dashboard({ userId }: { userId: number }): JSX.Element | null {
  const [userData, setUserData] = useState<UserDataModel | null>(null);

  useEffect(() => {
    getUser(userId).then((response) => setUserData(response));
  }, [userId]);
  console.log('xbn', userData?.keyData);

  if (!userData) {
    return null;
  }

  return (
    <div className="dashboard">
      <DashboardHeader userFirstName={userData.userInfos.firstName} />
      <div className="results">
        <div className="charts">
          <BarChartDailyActivity userId={userId} />
          <div className="charts-under">
            <LineChartSessionDuration userId={userId} />
            <RadarChartPerformances userId={userId} />
            <PieChartObjective userId={userId} />
          </div>
        </div>
        <PanelResults userData={userData} />
      </div>
    </div>
  );
}
