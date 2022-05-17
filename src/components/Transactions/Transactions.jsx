import PropTypes from 'prop-types';

import "./transactions.module.css"

function TransactionHistory({ items }) {
    const transactionItem = items.map(({id, type, amount, currency}) => (
        <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>
    ))
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
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