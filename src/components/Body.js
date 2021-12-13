import React, { useState } from "react";
import Buttons from "./Buttons";
import Comments from "./Comments";


function Body({ data }) {
    const [showComments, setShowComments] = useState(true);
  
    function showHideComments () {
      setShowComments((showComments) => !showComments);
    }

  return (
    <div>
        <h5>{data.views} Views | Uploaded {data.createdAt}</h5>
        <Buttons upvotes={data.upvotes} downvotes={data.downvotes} commentStatus={showComments} changeButton={showHideComments}/>
        <span>______________________________________________________________________________________________________________</span>
        <Comments comments={data.comments} commentStatus={showComments}/>
      
    </div>
  );
}

export default Body;
