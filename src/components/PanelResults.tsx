import { ResultItem } from './ResultItem';
import caloriesIcon from '../assets/calories-icon.jpg';
import carbsIcon from '../assets/carbs-icon.jpg';
import fatIcon from '../assets/fat-icon.jpg';
import proteinIcon from '../assets/protein-icon.jpg';

export function PanelResults() {
  return (
    <div className="resultItemList">
      <ResultItem
        icon={caloriesIcon}
        quantity={1.93}
        unity="Cal"
        quantityName="Calories"
      />
      <ResultItem
        icon={proteinIcon}
        quantity={155}
        unity="g"
        quantityName="Proteines"
      />
      <ResultItem
        icon={carbsIcon}
        quantity={290}
        unity="g"
        quantityName="Glucides"
      />
      <ResultItem
        icon={fatIcon}
        quantity={50}
        unity="g"
        quantityName="Lipides"
      />
    </div>
  );
}
