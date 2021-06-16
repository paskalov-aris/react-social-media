import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const newMessageElement = React.createRef();

    const addMessage = () => {
        props.addMessage();
    }

    const onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.onMessageChange(text);
    };

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} key={message.id} id={message.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText} />
                </div>
                <button onClick={addMessage}>Добавить сообщение</button>
            </div>
        </div>
    );
}

export default Dialogs;
