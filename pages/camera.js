import WebcamComponent from "../components/WebcamComponent"
import React from "react";

export default function Camera() {

    const [src, setSrc] = React.useState(null)
    const [selectedFile, setFile] = React.useState(null)

    const previewFile = (Event) => {
        const reader = new FileReader();
        var newFile = Event.target.files[0]
        setFile(newFile)

        reader.addEventListener("load", function () {
            // convert image file to base64 string
            var fileSrc = reader.result;
            setSrc(fileSrc)
    
            console.log('Render result:',reader.result)
        }, false);
    
        if (newFile) {
            reader.readAsDataURL(newFile);
        }
    }

    return (
        <>
            <h1>
                Camera
            </h1>

            <br />
            <WebcamComponent setSource={setSrc} />
            <form>
                <label>Upload a file</label>
                <input type="file" name="file" onChange={previewFile} />
            </form>
            <img src={src} height="200" alt="Image preview..." />

            <button > Analyze Image </button>
        </>
    )
}
