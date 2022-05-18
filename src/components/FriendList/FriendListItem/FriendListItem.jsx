import PropTypes from 'prop-types';
import style from "./friendListItem.module.css"

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className={style.item}>
            <span className={isOnline ? style['status_online'] : style['status_offline']}></span>
            <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={style.name}>{name}</p>
        </li>
    )
}


FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default FriendListItem;