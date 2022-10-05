import './ResultItem.scss';
import PropTypes from 'prop-types';

type ResultItemProps = {
  icon: string;
  quantity: string | number;
  unity: string;
  quantityName: string;
};

/**
 * Function represents the item of each user result
 */
export function ResultItem({
  icon,
  quantity,
  unity,
  quantityName,
}: ResultItemProps) {
  return (
    <div className="result__item">
      <img src={icon} alt="result__item__icon"></img>
      <div className="result__item__issue">
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
  icon: PropTypes.string,
  quantity: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  unity: PropTypes.string,
  quantityName: PropTypes.string,
};
