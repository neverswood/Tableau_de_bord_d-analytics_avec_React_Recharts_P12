import { object } from 'prop-types';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { getUserAverageSessions } from '../../../services/User';
import './LineChartSessionDuration.scss';
import UserSessionDurationModel from '../../../services/models/UserSessionDurationModel';

/**
 * Function representing the session duration of the sports activity per day of the user.
 * @param {number} userId - The userId value
 * @return {LineChartSessionsDurations}
 */
export function LineChartSessionDuration({ userId }: { userId: number }) {
  const [userSessions, setUserSessions] = useState<UserSessionDurationModel[]>(
    []
  );

  useEffect(() => {
    getUserAverageSessions(userId).then((response) =>
      setUserSessions(response)
    );
  }, [userId]);

  const CustomTooltip = ({
    active,
    payload,
  }: {
    active: any;
    payload: any;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-line">
          <p className="label-line">{`${payload[0].value}   min`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomHover = (props: any) => {
    const points = props.points;

    return (
      <rect
        x={points[0].x}
        y="5"
        width="100%"
        height="100%"
        fill="rgba(0, 0, 0, 0.1"
      />
    );
  };

  if (userSessions.length === 0) {
    return null;
  }

  return (
    <div className="graphic-session-duration">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={userSessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <rect
            width="258"
            height="263"
            fill="#FF0000"
            rx="5px"
            stroke="none"
          ></rect>
          <text
            y={20}
            fill="white"
            opacity={0.7}
            textAnchor="middle"
            dominantBaseline="central"
          >
            <tspan x="90" dy="15" fontSize="15px" fontWeight="500">
              Durée moyenne des
            </tspan>
            <tspan x="54" dy="22" fontSize="15px" fontWeight="500">
              sessions
            </tspan>
          </text>

          <XAxis
            dataKey="day"
            fontSize={12}
            tick={{ opacity: 0.7 }}
            tickLine={false}
            axisLine={false}
            tickCount={10}
            padding={{ left: 0, right: 0 }}
            dy={-20}
            stroke="#FFFFFF"
            strokeOpacity={0.5}
          />
          <YAxis
            hide
            dataKey="sessionLength"
            tickLine={false}
            axisLine={false}
            domain={['dataMin - 60', 'dataMax +90']}
          />

          <Tooltip
            content={<CustomTooltip active={true} payload={object} />}
            cursor={<CustomHover />}
            wrapperStyle={{ outline: 'none' }}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            strokeOpacity={0.5}
            dot={false}
            activeDot={{ stroke: 'rgba(255,255,255,0.2)', strokeWidth: 10 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

LineChartSessionDuration.propTypes = {
  userSessions: PropTypes.shape({
    day: PropTypes.number,
    sessionLenght: PropTypes.number,
  }),
};
