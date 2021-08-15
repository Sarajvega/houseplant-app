import React from "react";
import Webcam from "react-webcam";
import { useState } from "react";

// https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
// Use .getUseRMedia() to toggle? Overriding what's built into the webcomponent.

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints = {
    facingMode: FACING_MODE_USER
};


const WebcamComponent = ({ setSource }) => {
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

    // select facing mode
    const [facingMode, setFacingMode] = React.useState(FACING_MODE_ENVIRONMENT);

    const handleClick = React.useCallback(() => {
        setFacingMode(
            prevState =>
                prevState === FACING_MODE_ENVIRONMENT
                    ? FACING_MODE_USER
                    : FACING_MODE_ENVIRONMENT
        );
    }, []);


    return (
        <>
            {/* <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
            />
            <button onClick={capture} className="button-camera">Capture photo</button> */}
            <>
                <button onClick={handleClick}>Switch camera</button>
                <Webcam
                    audio={false}
                    screenshotFormat="image/jpeg"
                    videoConstraints={{
                        ...videoConstraints,
                        facingMode
                    }}
                />
            </>
        </>
    );
};

export default WebcamComponent
