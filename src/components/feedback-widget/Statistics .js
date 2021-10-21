import PropTypes from 'prop-types';
import Notification from './Notification';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={s.statistics}>
      <h2>Statistics</h2>
      {total > 0 ? (
        <div>
          <ul className={s.stats}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
          </ul>
          <p className={s.total}>Total feedbacks: {total}</p>
          <p className={s.positive}>
            Positive feedbacks: {positivePercentage}%
          </p>
        </div>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
export default Statistics;
