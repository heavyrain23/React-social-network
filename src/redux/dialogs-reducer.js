const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_POST_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Viktoria'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Anton'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'how are u'},
        {id: 3, message: 'yo nigga'},
        {id: 4, message: 'whats up man'},
        
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]

            };
            
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;