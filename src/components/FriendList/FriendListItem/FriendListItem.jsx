import PropTypes from 'prop-types';


function FriendListItem ({ friend }) {
    return (
            <li className="item">
                <span className={friend.isOnline ? "status__online" : "status__offline"}></span>
                <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                <p className="name">{friend.name}</p>
            </li>
        )
}


FriendListItem.defaultProps = {
    friend: {},
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired, 
    }),
}

export default FriendListItem;