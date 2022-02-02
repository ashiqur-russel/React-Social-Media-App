import React from 'react';
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../testData.js"

export default function Post({ post }) {

    return (

        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className='postProfileImg'
                            src={Users.filter((user) => user.id === post?.userId)[0].profilePicture}

                            alt='' />
                        <span className='postUserName'>
                            {Users.filter((user) => user.id === post?.userId)[0].username}
                        </span>
                        <span className='postDate'>{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post?.desc}
                    </span>
                    <img className='postImg' src={post.photo} alt=''></img>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src='/assets/like.png' alt='' />
                        <img className='likeIcon' src='/assets/heart.png' alt='' />
                        <span className="postLikeCounter">{post.like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment}</span>
                    </div>

                </div>

            </div>
        </div>

    );
}
