import './DashboardHeader.scss';
import PropTypes from 'prop-types';

export function DashboardHeader({ userFirstName }: { userFirstName: string }) {
  return (
    <div className="dashboard__header">
      <p>
        Bonjour <span className="name">{userFirstName}</span>
      </p>
      <span className="text">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </span>
    </div>
  );
}

DashboardHeader.propTypes = {
  userFirstName: PropTypes.string,
};
