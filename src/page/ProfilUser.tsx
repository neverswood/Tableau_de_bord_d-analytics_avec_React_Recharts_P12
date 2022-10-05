import './ProfilUser.scss';
import { Dashboard } from '../components/Dashboard/Dashboard';
import { PanelActivities } from '../components/PanelActivities/PanelActivities';
import PropTypes from 'prop-types';

/**
 * Function representing the page after the user login with its components
 * @param {number} userId - The userId value
 */
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
