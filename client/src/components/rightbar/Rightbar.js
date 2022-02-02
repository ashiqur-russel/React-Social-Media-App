import React from 'react';
import "./rightbar.css";
import { Users } from "../../testData"

import Online from '../online/Online.js';

export default function Rightbar() {
    return (
        <div className='rightbar'>

            {/* Birthday mesaage part start*/}
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className='birthdayImg' src='assets/gift.png' alt='s' />
                    <span className='birthdayText'>
                        {" "}
                        <b>John Doe </b>and<b> 3 other friends</b> have a birthday today
                    </span>
                </div>
            </div>

            {/* Add part  start*/}
            <img className="rightbarAd" src='assets/ad.png' alt=''></img>
            <h4 className='rightbarTitle'> Online Friends</h4>
            <ul className="rightbarFriendList">
                {Users.map((user) => {
                    console.log(user)
                    return (

                        <Online key={user.id} user={user} />



                    )

                })}

            </ul>


        </div>
    )
}
