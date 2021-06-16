import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    // Преобразовываем объекты с постами в компоненты
    let postsElements = props.posts.map(post => <Post id={post.id} message={post.message} profile={props.profile} likesCount={post.likesCount} />)

    // Ссылка на Virtual DOM элемент
    let newPostElement = React.createRef();

    // Функция добавления поста, которая привязана к button
    let onAddPost = () => {
        props.addPost();
    }

    // Функция изменения value у textarea
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    // JSX разметка
    return (
        <div className={classes.postsBlock}>
            <h3>Мои публикации</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <button onClick={ onAddPost }>Добавить публикацию</button>
                <div className={classes.posts}>
                    { postsElements }
                </div>
            </div>
        </div>
    );
}

export default MyPosts;