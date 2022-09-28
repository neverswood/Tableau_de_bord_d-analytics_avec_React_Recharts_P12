import './ResultItem.scss';
import propTypes from 'prop-types';

type ResultItemProps = {
  icon: string;
  quantity: number;
  unity: string;
  quantityName: string;
};

export function ResultItem({
  icon,
  quantity,
  unity,
  quantityName,
}: ResultItemProps) {
  return (
    <div className="resultItem">
      <img src={icon} alt="icon"></img>
      <div className="result">
        <p>
          {quantity}
          {unity}
        </p>
        <span>{quantityName}</span>
      </div>
    </div>
  );
}

ResultItem.protoTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      icon: propTypes.string,
      quantity: propTypes.number,
      unity: propTypes.string,
      quantityName: propTypes.string,
    })
  ),
};
