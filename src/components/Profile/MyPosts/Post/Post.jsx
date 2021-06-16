import React from "react";
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.post__column}>
                <img src="https://social-network.samuraijs.com/activecontent/images/users/14/user.jpg?v=0" className={styles.post__image}
                     alt="Post Image"/>
                <p className={styles.post__message}>{props.message}</p>
            </div>
            <p className={styles.post__likes}>Лайков: {props.likesCount}</p>
        </div>
    );
}

export default Post;