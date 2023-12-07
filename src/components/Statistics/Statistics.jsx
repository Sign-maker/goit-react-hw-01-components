import { getRandomHexColor } from 'utils/get-random-color';
import css from './Statistics.module.css';

export const Statistics = ({ title, data }) => {
  return (
    <section className={css.statistics}>
      {title?.length > 0 && <h2 className={css.title}>{title}</h2>}
      {/* {title && <h2 className={css.title}>{title}</h2>} */}

      <ul className={css.statList}>
        {data.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              className={css.item}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{`${percentage}%`}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
