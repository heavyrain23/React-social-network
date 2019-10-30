import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
            <div>
                <div>
                    <img src='https://cdn.cnn.com/cnnnext/dam/assets/161021133655-img-worlds-velociraptor-super-169.jpg' />
                </div>
                <div className = {s.descriptionBlock}>
                    ava + description
                </div>

            </div>
    )        
}   

export default ProfileInfo