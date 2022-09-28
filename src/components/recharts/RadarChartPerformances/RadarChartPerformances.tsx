import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import { getUserPerformance } from '../../../services/User';
import './RadarChartPerformances.scss';
import UserPerformanceModel from '../../../services/models/UserPerformanceModel';

export function RadarChartPerformances({ userId }: { userId: number }) {
  const [userPerformance, setUserPerformance] = useState<
    UserPerformanceModel | null | any
  >(null);

  useEffect(() => {
    getUserPerformance(userId).then((response) => setUserPerformance(response));
  }, [userId]);

  if (!userPerformance) {
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
          data={userPerformance.reduce(
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
  data: propTypes.arrayOf(
    propTypes.shape({
      value: propTypes.number,
      kind: propTypes.number,
    })
  ),
};
