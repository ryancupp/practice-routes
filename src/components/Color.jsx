import React from 'react'
import { useParams } from 'react-router-dom'

const Color = () => {
    const { word, wordcolor, bgcolor } = useParams();
    
        if (isNaN(word)){
    return <h1 style={{ color: wordcolor, backgroundColor: bgcolor }}> The word is: {word}</h1>;
    }
    return <h1 style={{ color: wordcolor, backgroundColor: bgcolor }}> The num is: {word}</h1>
}
    
    export default Color