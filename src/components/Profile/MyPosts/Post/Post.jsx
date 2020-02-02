import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return  <div className={s.item}>
                <div className = {s.userItem}>
                    <img className = {s.icon} src="https://media.wnyc.org/i/800/0/c/85/2019/05/RadioHour-AvaDuverney-4x3.jpg" alt="" />
                    <div>User Name</div>
                </div>
                
                <div className = {s.message}> {props.message} </div>           
                <span className = {s.like}>Like {props.likeCount}</span> 
            </div>       

}   

export default Post;