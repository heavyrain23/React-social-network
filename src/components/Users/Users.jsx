import React from 'react';
import styles from './users.module.css'

let Users = (props) => {

        if (props.users.length === 0) {
            props.setUsers([
            {
                id: 1,
                photoUrl: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png',
                followed: true, 
                fullName: "Dmitry", 
                status: "I'm a boss", 
                location: { city: 'Minsk', country: 'Belarus' }
            },
            {
                id: 2, photoUrl: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png',
                followed: false,
                fullName: "Sasha", 
                status: 'Gimme a food', 
                location: { city: 'Moskow', country: 'Russia' }
            },
            {
                id: 3, photoUrl: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png',
                followed: true, 
                fullName: "Oleg", 
                status: 'Looking for friedns',
                location: { city: 'Kiev', country: 'Ukraine' }
            }
        ]
    )
}


return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;