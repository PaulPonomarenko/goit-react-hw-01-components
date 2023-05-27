import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { randomColor } from './randomColor';
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat__list}>
        {stats.map(stat => {
          return (
            <li
              className={css.item}
              key={stat.id}
              style={{ backgroundColor: randomColor() }}
            >
              <span className={css.label}>{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propType = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
