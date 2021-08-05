import React from "react";
import Webcam from "react-webcam";
import { useState } from "react";

// https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
// Use .getUseRMedia() to toggle? Overriding what's built into the webcomponent.

// I’d probably add an onCapture prop to the WebcamComponent that gets passed the imageSrc whenever it changes thereby “passing the source ‘up’” as you said
const WebcamComponent = (props) => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        props.onCapture(imageSrc)
    }, [webcamRef, setImgSrc]);

    return (
        <>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
            />
            <button onClick={capture}>Capture photo</button>

        </>
    );
};

export default WebcamComponent
