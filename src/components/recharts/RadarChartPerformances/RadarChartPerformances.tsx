import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import { getUserPerformances } from '../../../services/User';
import './RadarChartPerformances.scss';
import UserPerformanceModel from '../../../services/models/UserPerformanceModel';

/**
 * Function representing the user performances with the radarChart
 * @param {number} userId - The userId value
 * @return {RadarChartPerformances}
 */

export function RadarChartPerformances({ userId }: { userId: number }) {
  const [userPerformances, setUserPerformances] = useState<
    UserPerformanceModel[]
  >([]);

  useEffect(() => {
    getUserPerformances(userId).then((response) =>
      setUserPerformances(response)
    );
  }, [userId]);

  if (userPerformances.length === 0) {
    return null;
  }

  return (
    <div className="radar-chart-performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="60%"
          width={133}
          height={117}
          data={userPerformances.reduce(
            (acc: any, val: any) => [val, ...acc],
            []
          )}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            orient=""
            tick={{ fontSize: '12', fill: 'white' }}
            dx={0}
            cy={50}
            dy={4}
          />
          <PolarRadiusAxis
            tick={false}
            axisLine={false}
            tickCount={6}
            angle={360}
          />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.8} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

RadarChartPerformances.propTypes = {
  userId: PropTypes.number,
};
