import React from 'react';
import "./rightbar.css";
import { Users } from "../../testData"

import Online from '../online/Online.js';

export default function Rightbar({ profile }) {

    //Component for profile page instead of showing birthday message and others

    const ProfileRightBar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Chemnitz,Germany</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Dhaka,Banghladesh</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/1.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Doe</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/2.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Doe</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/3.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Doe </span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/4.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Doe</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/5.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Doe</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/6.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Doe</span>
                    </div>
                </div>
            </>
        );
    }
    //Component for Home page that will show birthday message and others(ex.-Ad)

    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className='birthdayImg' src='assets/gift.png' alt='s' />
                    <span className='birthdayText'>
                        {" "}
                        <b>John Doe </b>and<b> 3 other friends</b> have a birthday today
                    </span>
                </div>
                {/* Add part  start*/}
                <img className="rightbarAd" src='assets/ad.png' alt=''></img>
                <h4 className='rightbarTitle'> Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((user) => {
                        return (
                            <Online key={user.id} user={user} />
                        )
                    })}
                </ul>
            </>
        )
    }
    return (
        <div className='rightbar'>
            {/* Birthday mesaage part start*/}
            <div className="rightbarWrapper">
                {profile ? <ProfileRightBar /> : <HomeRightBar />}

            </div>
        </div >
    )
}
