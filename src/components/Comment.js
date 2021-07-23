import { useState } from 'react'

function Comment({comment}) {
    const [upvote, setUpvote] = useState(0);
    const [downvote, setDownvote] = useState(0);
    const [isShown, setShown] = useState(true);
    
    function upvoteCount() {
        setUpvote(upvote=>upvote+1)
    };

    function downvoteCount() {
        setDownvote(downvote=>downvote+1)
    }

    function removeComment() {
        setShown(isShown=>false)
    }

    return (
        <div key={comment.id} style={{display: isShown ? "block" : "none"}}>
            <h4>{comment.user}</h4>
            <p>{comment.user}</p>
            <p>{comment.comment}</p>
            <button onClick={upvoteCount}>Great {upvote}</button>
            <button onClick={downvoteCount}>Boo {downvote}</button>
            <button onClick={removeComment}>Remove</button>
            <hr />
        </div>
    )
}

export default Comment