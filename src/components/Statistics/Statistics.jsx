import PropTypes from 'prop-types';
import "./statistics.css"

export default function Statistics({title, stats}) {
    const statisticData = stats.map(stat =>(
        <li className="item" key={stat.id}>
        <span className="label">{stat.label}</span>
        <span className="percentage">{stat.percentage}</span>
    </li>
    ))
    
    return (
    <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
            {statisticData}
        </ul>
    </section>
    );
}

Statistics.propType = {
    title: PropTypes.string,
    stats: PropTypes.object,
}