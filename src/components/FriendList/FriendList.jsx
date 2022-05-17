import PropTypes from 'prop-types';
import "./friendList.css"

export default function FriendList({ friends }) {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <li className="item" key={friend.id}>
                    <span className={friend.isOnline ? "status__online" : "status__offline"}></span>
                    <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                    <p className="name">{friend.name}</p>
                </li>
            ))}
        </ul>
    )
}

FriendList.propType = {
    friends: PropTypes.object,
}