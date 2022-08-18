import '../styles/DashboardHeader.scss';

export function DashboardHeader({
  userFirstName,
}: {
  userFirstName: string | undefined;
}) {
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
