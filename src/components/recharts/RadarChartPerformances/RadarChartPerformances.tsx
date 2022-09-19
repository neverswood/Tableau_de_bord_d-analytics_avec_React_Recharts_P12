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
import { getUserPerformance, UserPerformance } from '../../../services/User';
import './RadarChartPerformances.scss';

export function RadarChartPerformances() {
  const [userPerformance, setUserPerformance] = useState<
    UserPerformance | null | any
  >(null);

  useEffect(() => {
    getUserPerformance().then(({ data }) => setUserPerformance(data));
  }, []);
  console.log('use', userPerformance?.data);

  const Labels = [
    'Cardio',
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité',
  ];
  const getLabel = (kind: any) => {
    return Labels[kind - 1];
  };

  return (
    <div className="radar-chart-performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="60%"
          width={133}
          height={117}
          data={userPerformance?.data.reduce(
            (acc: any, val: any) => [val, ...acc],
            []
          )}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={getLabel}
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
