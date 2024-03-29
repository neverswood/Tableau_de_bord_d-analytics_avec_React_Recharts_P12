import { useEffect, useState } from 'react';
import { getUser } from '../../services/User';
import PropTypes from 'prop-types';
import './Dashboard.scss';
import { BarChartDailyActivities } from '../recharts/BarChartDailyActivities/BarChartDailyActivities';
import { PieChartObjective } from '../recharts/PieChartObjective/PieChartObjective';
import { RadarChartPerformances } from '../recharts/RadarChartPerformances/RadarChartPerformances';
import { LineChartSessionsDuration } from '../recharts/LineChartSessionsDuration/LineChartSessionsDuration';
import { DashboardHeader } from './DashboardHeader/DashboardHeader';
import { PanelResults } from '../PanelResults/PanelResults';
import UserDataModel from '../../services/models/UserDataModel';

/**
 * Function representing the user dashboard with its results.
 * @param {number} userId - The userId value
 * @return {Dashboard}
 */
export function Dashboard({ userId }: { userId: number }): JSX.Element | null {
  const [userData, setUserData] = useState<UserDataModel | null>(null);

  useEffect(() => {
    getUser(userId)
      .then((response) => setUserData(response))
      .catch((error) => {
        console.error('There is a mistake', error);
      });
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
            <LineChartSessionsDuration userId={userId} />
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
