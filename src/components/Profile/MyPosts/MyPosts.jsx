import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from './../../../utils/validators/validators'
import {Textarea} from './../../../components/common/FormsControls/FormsControls'

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component={Textarea}
                   validate = {[required, maxLength10]} />
        </div>
        <div>
            <button className ={s.button}>Add post</button>
        </div>
    </form>;
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
           <div> <AddNewPostFormRedux onSubmit={onAddPost} /></div> 
            <div className={s.posts}>
              <div> {postsElements}</div>  
            </div>
        </div>
    )
}



export default MyPosts;