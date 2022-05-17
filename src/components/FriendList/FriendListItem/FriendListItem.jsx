import PropTypes from 'prop-types';


function FriendListItem ({isOnline, avatar, name}) {
    return (
            <li className="item">
                <span className={isOnline ? "status__online" : "status__offline"}></span>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
            </li>
        )
}

export default FriendListItem;