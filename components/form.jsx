import React from "react";
import { useState } from "react";
import './form.css'
import memesdata from "../memesdata";

export default function Form() {
    const [memeImg, setMemeImg] = useState({
        randomImg: "http://i.imgflip.com/1bij.jpg",
        imageName: ""
    });

    const [allMemes, setAllMemes] = useState(memesdata);

    function getImageImg() {
        const memesArr = allMemes.data.memes;
        const randomMeme = Math.floor(Math.random() * memesArr.length);
        const selectedMeme = memesArr[randomMeme];
        
        setMemeImg(prevMeme => ({
            ...prevMeme,
            randomImg: selectedMeme.url,
            imageName: selectedMeme.name
        }));
    }

    return (
        <div className="main">
            <div className="form">
                <form className="meme-form">
                    <div className="inputs">
                        <h1>{memeImg.imageName}</h1>
                    </div>
                </form>
                <button onClick={getImageImg}>Get New Meme Image</button>
            </div>

            <div className="meme-container">
                <img className="meme-img" src={memeImg.randomImg} alt="meme" />
            </div>
        </div>
    );
}
