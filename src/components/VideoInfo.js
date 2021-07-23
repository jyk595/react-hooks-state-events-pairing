import { useState } from 'react'

function VideoInfo({video}) {
    const [likes, setLikes] = useState(video.upvotes);
    const [dislikes, setDislikes] = useState(video.downvotes);

    function likeRender() {
        setLikes(likes => likes + 1);
    };

    function dislikeRender() {
        setDislikes(dislikes => dislikes + 1);
    };
    
    return (
        <>
            <h2>{video.title}</h2>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <button onClick={likeRender}>{likes} 👍</button>
            <button onClick={dislikeRender}>{dislikes} 👎</button>
        </>
    )
}

export default VideoInfo