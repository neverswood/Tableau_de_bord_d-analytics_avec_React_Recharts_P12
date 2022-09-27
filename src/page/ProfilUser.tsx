import './ProfilUser.scss';
import { Dashboard } from '../components/Dashboard/Dashboard';
import { PanelActivities } from '../components/PanelActivities/PanelActivities';

export function ProfilUser({ userId }: { userId: number }) {
  return (
    <div className="profil">
      <PanelActivities />
      <Dashboard userId={userId} />
    </div>
  );
}
