import '../styles/ProfilUser.scss';
import { Header } from '../components/Header';
import { PanelActivities } from '../components/PanelActivities';
import { Dashboard } from '../components/Dashboard';

export function ProfilUser() {
  return (
    <div className="App">
      <Header />
      <div className="profil">
        <PanelActivities />
        <Dashboard />
      </div>
    </div>
  );
}
