import React from 'react';
import "./floating-face.css";

interface FloatingFaceProps {
    userName: string;
    imgSrc: string;
}

export const FloatingFace = (props: FloatingFaceProps) => (
    <div className="floating floating-face">
        <img src={props.imgSrc} alt="face-img" />
        <span>{props.userName}</span>
    </div>
)