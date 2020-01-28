import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return  <div className={s.item}>
                <img src="https://media.wnyc.org/i/800/0/c/85/2019/05/RadioHour-AvaDuverney-4x3.jpg" alt="" />
                <div className = {s.message}> {props.message} </div>
                <div>
                <span className = {s.like}>Like {props.likeCount}</span> 
                </div>

            </div>       

}   

export default Post;