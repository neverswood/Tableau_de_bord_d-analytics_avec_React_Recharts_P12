import { DashboardHeader } from './DashboardHeader';
import { PanelResults } from './PanelResults';

export function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <PanelResults />
    </div>
  );
}
