const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Дмитрий'},
        {id: 2, name: 'Андрей'},
        {id: 3, name: 'Светлана'},
        {id: 4, name: 'Александра'},
        {id: 5, name: 'Виктор'},
        {id: 6, name: 'Валерий'},
    ],
    messages: [
        {id: 1, message: 'Хей'},
        {id: 2, message: 'Как у тебя дела?'},
        {id: 3, message: 'Йоу'},
        {id: 4, message: 'Йоу'},
        {id: 5, message: 'Йоу'},
    ],
    newMessageText: 'Пример текста'
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: state.newMessageText}],
                newMessageText: ''
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessage
            }
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});
export const updateNewMessageTextActionCreator = text => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text
});

export default dialogsReducer;
