import React from 'react'
import PROPS from './PROPS'

export default function LikeImage() {
  return (
   <PROPS>
    {({like,handleLike})=>(
        <button onClick={handleLike}>Like Image{like}</button>
    )}
   </PROPS>
  )
}
