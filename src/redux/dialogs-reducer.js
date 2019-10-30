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
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;