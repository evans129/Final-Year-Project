import pro1 from "../assets/proj1.png"
import pro2 from "../assets/proj2.png"
import pro3 from "../assets/proj3.png"
import pro4 from "../assets/proj4.png"

const ProjectCardData =[
    {
    imgsrc: pro1,
    title: "Face Analyzer",
    text: "This Project analyzes any given Face and finds out some details about the face using Deeplearning ,Tensorflow and Transfer learning models.Project is Deployed using Streamlit.",
    view: "https://evans129-faceanalyzer-app-y9i2zf.streamlit.app/",
    source: "https://github.com/evans129/FaceAnalyzer",
    },
    {
        imgsrc: pro2,
        title: "Face Mask Detector",
        text: "This project Detects a Face Mask.Trained using CNN and Deeplearning.Tensorflow and OpenCV library for training and building the model. Project is deployed using streamlit. Dataset used for training-> (https://www.kaggle.com/datasets/omkargurav/face-mask-dataset)",
        view: "https://evans129-face-mask-detector-app-86yp6y.streamlit.app/",
        source: "https://github.com/evans129/Face_Mask_detector",
        },
        {
            imgsrc: pro3,
            title: "Face Emotion Recognizer",
            text: "This Project using FER(Facial Expression Recognition) dataset for training purposes.Used Transfer learning methodology and Tensorflow and OpenCV library for training and building the model. Project is deployed using streamlit. Dataset used for training->(https://www.kaggle.com/datasets/msambare/fer2013)",
            view: "https://evans129-face-emotion-recognizer-app-h5itr9.streamlit.app/",
            source: "https://github.com/evans129/Face-Emotion-Recognizer",
            },
            {
                imgsrc: pro4,
                title: "Sleepiness_Checker",
                text: "This Project uses Tensorflow and OpenCV library for training and building the model. Project is deployed using streamlit.",
                view: "https://evans129-sleepiness-checker-app-yjvqpa.streamlit.app/",
                source: "https://github.com/evans129/Sleepiness_checker",
            },

];
export default ProjectCardData;