import yoga from '../../assets/yoga.jpg';
import swimming from '../../assets/swimming.jpg';
import bike from '../../assets/bike.jpg';
import fitness from '../../assets/fitness.jpg';
import './PanelActivities.scss';

export function PanelActivities() {
  return (
    <div className="panel">
      <img src={yoga} alt="yoga"></img>
      <img src={swimming} alt="swimming"></img>
      <img src={bike} alt="bike"></img>
      <img src={fitness} alt="fitness"></img>
      <p>Copiryght, SportSee 2020</p>
    </div>
  );
}
