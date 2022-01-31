import React from 'react';
import "./share.css";

import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src='/assets/person/1.jpeg' alt="" />
                    <input type="text" placeholder='Whats in your mind Ashiq?' className='shareInput' ></input>
                </div>
                <hr className='shareHr' />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaIcon htmlColor='tomato' className='shareIcon' />
                            <span className="shareOptiontext">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <LabelIcon htmlColor='blue' className='shareIcon' />
                            <span className="shareOptiontext">Tag</span>
                        </div>
                        <div className="shareOption">
                            <RoomIcon htmlColor='green' className='shareIcon' />
                            <span className="shareOptiontext">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon' />
                            <span className="shareOptiontext">Feelings</span>
                        </div>
                    </div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    )
}
