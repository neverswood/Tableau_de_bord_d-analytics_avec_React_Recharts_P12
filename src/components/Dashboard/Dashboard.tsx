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

export function Dashboard(): JSX.Element | null {
  const [userData, setUserData] = useState<UserDataModel | null>(null);

  useEffect(() => {
    getUser().then((response) => setUserData(response));
  }, []);
  if (!userData) {
    return null;
  }
  return (
    <div className="dashboard">
      <DashboardHeader userFirstName={userData.firstName} />
      <div className="results">
        <div className="charts">
          <BarChartDailyActivity />
          <div className="charts-under">
            <LineChartSessionDuration />
            <RadarChartPerformances />
            <PieChartObjective />
          </div>
        </div>
        <PanelResults keyData={userData} />
      </div>
    </div>
  );
}
