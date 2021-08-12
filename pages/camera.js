import axios from "axios"
import WebcamComponent from "../components/WebcamComponent"
import React from "react";
import { useRouter } from 'next/router'

export default function Camera() {
    const router = useRouter()

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

            console.log('Render result:', reader.result)
        }, false);

        if (newFile) {
            reader.readAsDataURL(newFile);
        }
    }
    // async -> synt sug to be able to deal w/ promise chains. 
    const analyzeImage = () => {
        console.log("analyze button clicked!")

        const url = `https://plant-prediction-service.azurewebsites.net/predict`
        var imageData = src

        axios
            .post(url, {
                image: imageData
            })
            .then((res) => {
                // expects a resp. obj. 
                // usually call a setter for a piece of state. --> load plant care page. 
                // next --> redirect to new location.
                console.log("Successful request~")
                console.log("This is what the response object looks like: ", res)
                console.log(res.data.predictions[0].label)
                const plantName = res.data.predictions[0].label
                // router.push(plantName)
                // router.push("/Plant/aloe")
                router.push(`/Plant/${plantName}`)


            })
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    }

    return (
        <>
            <h1>
                Camera
            </h1>
            {/* maybe add a check for file extension - form validation */}
            <br />
            <WebcamComponent setSource={setSrc} />
            <form>
                <label>Upload a file</label>
                <input type="file" name="file" onChange={previewFile} />
            </form>
            <img src={src} height="200" alt="Image preview..." />

            <button onClick={analyzeImage}> Analyze Image </button>
        </>
    )
}


