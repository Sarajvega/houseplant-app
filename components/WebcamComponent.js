import React from "react";
import Webcam from "react-webcam";
import { useState } from "react";

// const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints = {
    facingMode: FACING_MODE_ENVIRONMENT
};

const WebcamComponent = ({ setSource }) => {
    const webcamRef = React.useRef(null);

    // memoizing capture function.
    const capture = React.useCallback(() => {
        // imageSrc is base64
        const imageSrc = webcamRef.current.getScreenshot();
        setSource(imageSrc)
    }, [webcamRef, setSource]);

    return (
        <>
                <div className="w12">
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        videoConstraints={videoConstraints}
                        screenshotFormat="image/jpeg"
                        style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            // position: 'absolute',
                        }}
                        width={'100%'}
                        height={'100%'}
                    />
                </div>
                <button onClick={capture} className="button-camera">Capture photo</button>
        </>
    );
};

export default WebcamComponent
