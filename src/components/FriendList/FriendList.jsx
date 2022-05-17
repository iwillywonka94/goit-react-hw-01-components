import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

import styles from "./friendList.module.css"

function FriendList({ friends }) {
    const friend = friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend}/>
    ))
    return (
        <ul className={styles.friend_list}>
            {friend}
        </ul>
    )
}

FriendList.defaultProps = {
    friends: []
}

FriendList.propType = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired, 
    })),
}

export default FriendList;