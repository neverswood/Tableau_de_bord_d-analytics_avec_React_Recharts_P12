import { useEffect, useState } from 'react';
import { getUser } from '../../services/User';
import PropTypes from 'prop-types';
import './Dashboard.scss';
import { BarChartDailyActivities } from '../recharts/BarChartDailyActivity/BarChartDailyActivity';
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

  if (!userData) {
    return null;
  }

  return (
    <div className="dashboard">
      <DashboardHeader userFirstName={userData.firstName} />
      <div className="results">
        <div className="charts">
          <BarChartDailyActivities userId={userId} />
          <div className="charts-under">
            <LineChartSessionDuration userId={userId} />
            <RadarChartPerformances userId={userId} />
            <PieChartObjective todayScore={userData.todayScore} />
          </div>
        </div>
        <PanelResults userData={userData} />
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  userId: PropTypes.number,
};
