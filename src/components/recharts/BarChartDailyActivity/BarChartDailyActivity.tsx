import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import './BarChartDailyActivity.scss';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { getUserActivity } from '../../../services/User';
import UserActivityModel from '../../../services/models/UserActivityModel';

export function BarChartDailyActivity() {
  const [userData, setUserData] = useState<UserActivityModel | any | null>(
    null
  );

  useEffect(() => {
    getUserActivity().then((response) => setUserData(response));
  }, []);

  const CustomTooltip = ({
    active,
    payload,
  }: {
    active: any;
    payload: any;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[1].value}kg`}</p>
          <p className="intro">{`${payload[0].value}Kcal`}</p>
        </div>
      );
    }

    return null;
  };

  const renderLegend = () => {
    return (
      <div className="custom-legend">
        <p className="lab">
          <i className="fa fa-solid fa-circle circle-poids"></i>
          {`Poids (kg)`}
        </p>
        <p className="intr">
          <i className="fa-solid fa-circle circle-calories"></i>
          {`Calories brulées(Kcal)`}
        </p>
      </div>
    );
  };

  if (!userData) {
    return null;
  }

  return (
    <div className="graphic-daily-activity">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={userData}
          margin={{ top: 100, bottom: -50, left: 20 }}
          barGap="10%"
        >
          <text
            x={100}
            y={30}
            fill="black"
            textAnchor="middle"
            dominantBaseline="central"
          >
            <tspan fontSize="18px" fontWeight="500">
              Activité quotidienne
            </tspan>
          </text>
          <Legend
            content={renderLegend}
            height={70}
            width={300}
            wrapperStyle={{ position: 'absolute', top: 0, right: -25 }}
          />
          <CartesianGrid strokeDasharray="2" vertical={false} />
          <XAxis
            dataKey="day"
            fontSize={14}
            tickMargin={15}
            tickLine={false}
            scale="point"
            padding={{ right: 13, left: 13 }}
          />
          <YAxis
            dataKey="calories"
            tickCount={3}
            orientation="right"
            axisLine={false}
            tickLine={false}
            style={{ fontSize: '14px' }}
            stroke="#9B9EAC"
            dx={20}
          />
          <Tooltip
            cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
            wrapperStyle={{
              color: 'red',
              outline: 'none',
              backgroundColor: 'red',
            }}
            labelStyle={{ color: 'white' }}
            itemStyle={{ color: 'white' }}
            content={<CustomTooltip active={undefined} payload={undefined} />}
          />

          <Bar
            dataKey="kilogram"
            fill="#000000"
            radius={[50, 50, 0, 0]}
            barSize={7}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            radius={[50, 50, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
