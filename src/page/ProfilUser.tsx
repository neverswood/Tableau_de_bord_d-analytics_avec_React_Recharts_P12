import './ProfilUser.scss';
import { Dashboard } from '../components/Dashboard/Dashboard';
import { PanelActivities } from '../components/PanelActivities/PanelActivities';

export function ProfilUser() {
  return (
    <div className="profil">
      <PanelActivities />
      <Dashboard />
    </div>
  );
}
