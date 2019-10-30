import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
            { id: 1, message: 'Hi, how are u', likesCount: 12 },
            { id: 2, message: 'Its my first post', likesCount: 10 },
        ],
            newPostText: "it-kamasutra.com"
        },
        
        dialogsPage: {
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
    
        },

        sidebar: {
        },
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State changed');
    },

    _subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    
    rerenderEntireTree() {
    console.log('State changed');
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._CallSubscriber(this._state);
    }
}




export default store;
window.store = store;

