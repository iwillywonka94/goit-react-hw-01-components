import PropTypes from 'prop-types';

import styles from "./statistics.module.css"

function Statistics({ title, stats }) {
    const statisticElement = stats.map(stat => (
        <li className={styles.item} key={stat.id}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}</span>
        </li>
    ))

    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.statistics_list}>
                {statisticElement}
            </ul>
        </section>
    );
}

Statistics.defaultProps = {
    stat: [],
}

Statistics.propType = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
}

export default Statistics;