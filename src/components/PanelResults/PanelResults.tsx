import caloriesIcon from '../../assets/calories-icon.jpg';
import carbsIcon from '../../assets/carbs-icon.jpg';
import fatIcon from '../../assets/fat-icon.jpg';
import proteinIcon from '../../assets/protein-icon.jpg';
import UserDataModel from '../../services/models/UserDataModel';
import propTypes from 'prop-types';
import './PanelResults.scss';
import { ResultItem } from './ResultItem';

export function PanelResults({ keyData }: { keyData: UserDataModel }) {
  return (
    <div className="resultItemList">
      <ResultItem
        icon={caloriesIcon}
        quantity={keyData.calorieCount}
        unity="KCal"
        quantityName="Calories"
      />
      <ResultItem
        icon={proteinIcon}
        quantity={keyData.proteinCount}
        unity="g"
        quantityName="Proteines"
      />
      <ResultItem
        icon={carbsIcon}
        quantity={keyData.carbohydrateCount}
        unity="g"
        quantityName="Glucides"
      />
      <ResultItem
        icon={fatIcon}
        quantity={keyData.lipidCount}
        unity="g"
        quantityName="Lipides"
      />
    </div>
  );
}

PanelResults.protoTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      icon: propTypes.string,
      quantity: propTypes.number,
      unity: propTypes.string,
      quantityName: propTypes.string,
    })
  ),
};
