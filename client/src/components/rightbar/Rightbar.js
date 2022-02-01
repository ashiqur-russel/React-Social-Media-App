import React from 'react';
import "./rightbar.css";

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
                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img className="rightbarProfileImg" src="assets/person/1.jpeg" alt="" />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">John</span>
                </li>

                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img className="rightbarProfileImg" src="assets/person/1.jpeg" alt="" />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">John</span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img className="rightbarProfileImg" src="assets/person/1.jpeg" alt="" />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">John</span>
                </li>

                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img className="rightbarProfileImg" src="assets/person/1.jpeg" alt="" />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">John</span>
                </li>
            </ul>


        </div>
    )
}
