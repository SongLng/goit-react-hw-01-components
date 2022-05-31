import propTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';
const Statistic = ({ stats, title }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

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
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ),
};
