import WebcamComponent from "../components/WebcamComponent"
export default function Camera() {

    // button which activates webcomponent
    // button to capture image in state
    // button to upload image
    // button to anaylze 

    return (
    <div>
        <h1>
            Camera
        </h1>
        <WebcamComponent />
        <button> Toggle Camera</button>
        <button> Take Photo </button>
        
        <form onSubmit=''>
            <label>Upload a file</label>
            <input type="file" /> 
            <button type='submit'> Preview file </button>
        </form>

        <button> Analyze Image </button>
    </div>
    )
}
