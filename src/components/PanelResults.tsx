import { ResultItem } from './ResultItem';
import caloriesIcon from '../assets/calories-icon.jpg';
import carbsIcon from '../assets/carbs-icon.jpg';
import fatIcon from '../assets/fat-icon.jpg';
import proteinIcon from '../assets/protein-icon.jpg';
import { UserKeyData } from '../services/User';

export function PanelResults({
  keyData,
}: {
  keyData: UserKeyData | undefined;
}) {
  console.log('c', keyData);
  return (
    <div className="resultItemList">
      <ResultItem
        icon={caloriesIcon}
        quantity={keyData?.calorieCount}
        unity="KCal"
        quantityName="Calories"
      />
      <ResultItem
        icon={proteinIcon}
        quantity={keyData?.proteinCount}
        unity="g"
        quantityName="Proteines"
      />
      <ResultItem
        icon={carbsIcon}
        quantity={keyData?.carbohydrateCount}
        unity="g"
        quantityName="Glucides"
      />
      <ResultItem
        icon={fatIcon}
        quantity={keyData?.lipidCount}
        unity="g"
        quantityName="Lipides"
      />
    </div>
  );
}
