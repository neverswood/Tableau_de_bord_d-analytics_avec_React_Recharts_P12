import caloriesIcon from '../../assets/calories-icon.jpg';
import carbsIcon from '../../assets/carbs-icon.jpg';
import fatIcon from '../../assets/fat-icon.jpg';
import proteinIcon from '../../assets/protein-icon.jpg';
import UserDataModel from '../../services/models/UserDataModel';
import PropTypes from 'prop-types';
import './PanelResults.scss';
import { ResultItem } from './ResultItem';

export function PanelResults({ userData }: { userData: UserDataModel }) {
  return (
    <div className="result__item__list">
      <ResultItem
        icon={caloriesIcon}
        quantity={userData.calorieCount}
        unity="KCal"
        quantityName="Calories"
      />
      <ResultItem
        icon={proteinIcon}
        quantity={userData.proteinCount}
        unity="g"
        quantityName="Proteines"
      />
      <ResultItem
        icon={carbsIcon}
        quantity={userData.carbohydrateCount}
        unity="g"
        quantityName="Glucides"
      />
      <ResultItem
        icon={fatIcon}
        quantity={userData.lipidCount}
        unity="g"
        quantityName="Lipides"
      />
    </div>
  );
}

PanelResults.protoTypes = {
  userData: PropTypes.shape({
    calorieCount: PropTypes.string,
    proteinCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
  }),
};
