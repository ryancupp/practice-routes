import React from 'react'
import { useParams } from 'react-router-dom'

const WordNum = () => {
    const { thing } = useParams();

    if (isNaN(thing)) {
        return <h1>The word is: {thing}</h1>;
    }
    return <h1>The num is: {thing}</h1>;


}

export default WordNum