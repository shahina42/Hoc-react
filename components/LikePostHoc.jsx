import React from 'react'
import HOC from "./HOC";

const LikePostHOC=({handleLikeCount,likeCounter}) =>{

  return (
    <div>
      <button onClick={handleLikeCount}>Like Post {likeCounter}</button>
    </div>
  );
  
}

export default  HOC(LikePostHOC);