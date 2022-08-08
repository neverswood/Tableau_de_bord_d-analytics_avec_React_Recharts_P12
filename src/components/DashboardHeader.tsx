import '../styles/DashboardHeader.scss';

export function DashboardHeader() {
  return (
    <div className="dashboard__header">
      <p>
        Bonjour <span className="name">Thomas</span>
      </p>
      <span className="text">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </span>
    </div>
  );
}
