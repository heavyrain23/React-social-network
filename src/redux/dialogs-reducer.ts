
const SEND_MESSAGE = "SEND_MESSAGE";

type DialogType = {
    id: number,
    name: string
}

type MessageType = {
    id: number,
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Viktoria'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Anton'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'how are u'},
        {id: 4, message: 'whats up man'},
        
    ] as Array<MessageType>
    
};

export type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]

            };
            
        default:
            return state;
    }
}

type sendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE,
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): sendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody})



export default dialogsReducer;
