import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user-image.png";
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";
import {unfollow, unfollowSuccess} from "../../redux/users-reducer";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }

    return (
        <div className={classes.usersBlock}>
            <div className={classes.paginationBlock}>
                {pages.map(page => {
                    return <span
                        className={`${classes.paginationButton} ${props.currentPage === page ? classes.selectedPage : ''}`}
                        onClick={() => props.onPageChange(page)}>{page}</span>
                })}
            </div>

            {props.isFetching ? <Preloader/> : null}

            {props.users.map(user => {
                return (
                    <div key={user.id}>
                         <span>
                             <div>
                                 <NavLink to={'/profile/' + user.id}>
                                     <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                          className={classes.user__photo} alt="User Photo"/>
                                 </NavLink>
                             </div>
                             <div>
                                 {user.followed ?
                                     <button disabled={props.isFollowing.some(id => id === user.id)}
                                             onClick={() => { props.unfollow(user.id) }
                                     }>Отписаться</button> :
                                     <button disabled={props.isFollowing.some(id => id === user.id)}
                                             onClick={() => { props.follow(user.id) }
                                     }>Подписаться</button>
                                 }
                             </div>
                         </span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                         </span>
                        <span>
                             {/*<div>{user.location.country}</div>*/}
                            {/*<div>{user.location.city}</div>*/}
                         </span>
                    </div>
                )
            })}
        </div>
    );
}

export default Users;