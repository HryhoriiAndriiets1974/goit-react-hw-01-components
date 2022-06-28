import PropTypes from 'prop-types';
import getRandomColor from 'path/getRandomColor';
import css from './Statistics.module.css'

export default function Statistics({title, stats}) {
  return (
  <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>

    <ul className={css.statList}>
      {stats.map(stat => (
        <li className={css.statItem}
            key={stat.id}
            style={{backgroundColor: getRandomColor()}}>
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
