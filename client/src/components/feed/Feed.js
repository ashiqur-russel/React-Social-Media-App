import React from 'react';
import "./feed.css";

import Share from '../share/Share';
import Post from '../post/Post';

import { Posts } from "../../testData.js"



export default function Feed() {
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share />
                {
                    Posts.map((posts) => {
                        return (
                            <Post key={posts.id} post={posts} />
                        )

                    })

                }

            </div>
        </div>
    );
}
