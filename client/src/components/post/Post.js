import React from 'react';
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../testData.js"

import { useState } from 'react';


export default function Post({ post }) {
    /* Increase & decrese like for post  */
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)




    }

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
                        <img className='likeIcon' src='/assets/like.png' alt='' onClick={likeHandler} />
                        <img className='likeIcon' src='/assets/heart.png' alt='' onClick={likeHandler} />
                        <span className="postLikeCounter">{like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>

                </div>

            </div>
        </div>

    );
}

