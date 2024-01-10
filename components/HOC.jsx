import React, { useState } from 'react'

const HOC = (WrappedHOC) => {
    return(props) => {
        const [likeCount,setlikeCount] = useState(0)

        const handleLikeCount = () => {
            setlikeCount((prevState) => prevState+1);
        }

        return(
            <WrappedHOC
                {...props}
                handleLikeCount = {handleLikeCount}
                likeCounter = {likeCount}
            />
        )
    }
}

export default HOC