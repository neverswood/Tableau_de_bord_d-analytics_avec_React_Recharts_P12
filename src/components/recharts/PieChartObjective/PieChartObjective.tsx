import PropTypes from 'prop-types';
import './PieChartObjective.scss';
import { Legend, ResponsiveContainer, PieChart, Pie } from 'recharts';

/**
 * Function representing in percentage and by a PieChart the progress of the user's goal.
 * @param {number} todayScore - The todayScore value
 * @return {PieChartObjective}
 */
export function PieChartObjective({ todayScore }: { todayScore: number }) {
  const scoreData = [
    { name: 'completed', value: todayScore, fill: 'red' },
    {
      name: 'not-completed',
      value: 1 - todayScore,
      fill: 'transparent',
    },
  ];

  const CustomLegend = ({ payload }: { payload: any }) => (
    <div className="custom-legend-pie">
      <p>
        <span className="score-number">{payload[0].payload.value * 100}%</span>
        de votre objectif
      </p>
    </div>
  );

  return (
    <div className="graphic-objective">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <text
            x="15%"
            y="10%"
            fill="#20253A"
            textAnchor="middle"
            dominantBaseline="central"
          >
            <tspan fontSize="15px" fontWeight="600">
              Score
            </tspan>
          </text>
          <Pie
            data={scoreData}
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={500}
            innerRadius={65}
            outerRadius={75}
            paddingAngle={5}
            cornerRadius={50}
            dataKey="value"
          />
          <Legend
            layout="horizontal"
            align="center"
            verticalAlign="middle"
            content={<CustomLegend payload={undefined} />}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

PieChartObjective.propTypes = {
  todayScore: PropTypes.number,
};
