import propTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';
const Statistic = ({ stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>

      <ul className={s.statlist}>
        {stats.map(stat => (
          <li key={stat.id} className={s.item}>
            <span className={s.label}> {stat.label}</span>
            <span className={s.percentage}> {stat.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistic;

Statistic.propTypes = {
  label: propTypes.string,
  percentage: propTypes.string,
};
