import PropTypes from 'prop-types';

import styles from "./transactions.module.css"

function TransactionHistory({ items }) {
    const transactionItem = items.map(({id, type, amount, currency}) => (
        <tr key={id}>
        <td className={styles.table_direction_type}>{type}</td>
        <td className={styles.table_direction}>{amount}</td>
        <td className={styles.table_direction}>{currency}</td>
    </tr>
    ))
    return (
        <table className={styles.transaction_history}>
            <thead>
                <tr>
                    <th className={styles.table_head}>Type</th>
                    <th className={styles.table_head}>Amount</th>
                    <th className={styles.table_head}>Currency</th>
                </tr>
            </thead>
            <tbody className={styles.table_body}>
                {transactionItem}
            </tbody>
        </table>
    )
}

TransactionHistory.defaultProps = {
    items: [],
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })),
}

export default TransactionHistory;