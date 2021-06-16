import React from "react";
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/user-image.png';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return(
        <div>
            <div>
                <img className={styles.profile__banner} src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="User Photo"/>
            </div>
            <div className={styles.description__block}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} className={styles.profile__photo} alt="Profile Photo"/>
                <h2 className={styles.user__name}>{props.profile.fullName}</h2>
                <p><span>О себе:</span> {props.profile.aboutMe}</p>
                <p><span>В поиске работы:</span> {props.profile.lookingForAJob ? 'Да' : 'Нет'}</p>
                <p><span>Заметка по поиску работы:</span> {props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
    );
}

export default ProfileInfo;