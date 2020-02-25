import profileReducer, {addPostActionCreator} from "./profile-reducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ]
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("some text here");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);

});


it("message of new post should be correct", () => {
    // 1. test data
    let action = addPostActionCreator("some text here");

    // 2. action
    let NewState = profileReducer(state, action);

    // 3. expectation 
    expect(newState.posts[4].message).toBe("some text here");
});