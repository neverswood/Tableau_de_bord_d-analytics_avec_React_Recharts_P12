import './ProfilUser.scss';
import { Dashboard } from '../components/Dashboard/Dashboard';
import { PanelActivities } from '../components/PanelActivities/PanelActivities';
import PropTypes from 'prop-types';

export function ProfilUser({ userId }: { userId: number }) {
  return (
    <div className="profil">
      <PanelActivities />
      <Dashboard userId={userId} />
    </div>
  );
}

ProfilUser.propTypes = {
  userId: PropTypes.number,
};
