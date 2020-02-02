import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div className={s.userContainer}>
            <div className={s.userItem}>
                <span>

                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                className={s.userPhoto} />
                        </NavLink>
                    </div>

                </span>
                <span className={s.userInfoContainer}>
                    <span className={s.userInfo}>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span className={s.userCountry}>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
                <div className={s.container}>
                    {user.followed
                        ? <button className={s.button} disabled={followingInProgress
                            .some(id => id === user.id)}
                            onClick={() => { unfollow(user.id) }}>
                            Unfollow</button>
                        : <button className={s.button} disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { follow(user.id) }}>
                            Follow</button>}

                </div>
            </div>
            <div className={s.userItem}>
                <span>

                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                className={s.userPhoto} />
                        </NavLink>
                    </div>

                </span>
                <span className={s.userInfoContainer}>
                    <span className={s.userInfo}>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span className={s.userCountry}>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
                <div>
                    {user.followed
                        ? <button className={s.button} disabled={followingInProgress
                            .some(id => id === user.id)}
                            onClick={() => { unfollow(user.id) }}>
                            Unfollow</button>
                        : <button className={s.button} disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { follow(user.id) }}>
                            Follow</button>}

                </div>
            </div>
        </div>)

}

export default User;