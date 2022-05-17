import PropTypes from 'prop-types';
import style from "./friendListItem.module.css"

function FriendListItem ({ friend }) {
    return (
            <li className={style.item}>
                <span className={friend.isOnline ? style['status_online'] : style['status_offline']}></span>
                <img className={style.avatar} src={friend.avatar} alt="User avatar" width="48" />
                <p className={style.name}>{friend.name}</p>
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