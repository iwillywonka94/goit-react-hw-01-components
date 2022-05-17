import PropTypes from 'prop-types';

import "./statistics.module.css"

function Statistics({ title, stats }) {
    const statisticElement = stats.map(stat => (
        <li className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
        </li>
    ))

    return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}
            <ul className="stat-list">
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