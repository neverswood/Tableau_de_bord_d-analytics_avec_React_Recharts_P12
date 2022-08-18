import '../styles/ProfilUser.scss';
import { Dashboard } from '../components/Dashboard';
import { PanelActivities } from '../components/PanelActivities';
//import { getUser } from '../services/User';

export function ProfilUser() {
  return (
    <div className="profil">
      <PanelActivities />
      <Dashboard />
    </div>
  );
}
