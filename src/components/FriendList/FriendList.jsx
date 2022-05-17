import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

import "./friendList.module.css"

function FriendList({ friends }) {
    const friend = friends.map(({id, ...friend}) => {
        <FriendListItem key={id} {...friend}/>
    })
    return (
        <ul className="friend-list">
            {friend}
        </ul>
    )
}

FriendList.propType = {
    friends: PropTypes.object,
}

export default FriendList;