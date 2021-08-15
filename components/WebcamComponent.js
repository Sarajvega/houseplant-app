import React from "react";
import Webcam from "react-webcam";
import { useState } from "react";

// https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
// Use .getUseRMedia() to toggle? Overriding what's built into the webcomponent.

const WebcamComponent = ({setSource}) => {
    const webcamRef = React.useRef(null);
    const videoConstraints = {
        facingMode: "user"
    };
    
    // memoizing capture function.
    const capture = React.useCallback(() => {
        // imageSrc is base64
        const imageSrc = webcamRef.current.getScreenshot();
        // setImgSrc(imageSrc);
        setSource(imageSrc)
        // console.log("this is the imagesrc:", imageSrc)
    }, [webcamRef, setSource]);

    return (
        <>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
            />
            <button onClick={capture} className="button-camera">Capture photo</button>

        </>
    );
};

export default WebcamComponent
