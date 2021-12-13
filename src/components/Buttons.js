import React, { useState } from "react";

function Buttons({upvotes, downvotes, commentStatus, changeButton}) {
    const [upvoteCount, setUpvoteCount] = useState(upvotes);
    const [downvoteCount, setDownvoteCount] = useState(downvotes);
  
    function increaseVote () {
      setUpvoteCount(upvoteCount +1)
      console.log(upvoteCount)
    }

    function decreaseVote () {
      setDownvoteCount(downvoteCount +1)
      console.log(downvoteCount)
    }

    return (
      <div>
        <button onClick={increaseVote}><b>{upvoteCount}</b> &#128077;</button>
        <button onClick={decreaseVote}><b>{downvoteCount}</b> &#128078;</button><br></br><br></br>
        <button onClick={changeButton}>{commentStatus ? "Hide" : "Show"} Comments</button>
      </div>
    );
  }
  
  export default Buttons;