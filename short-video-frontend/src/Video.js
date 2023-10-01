import React,{useRef,useState} from "react";
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSideBar from './VideoSideBar'
const Video=({url,channel,description,likes,shares,messages})=>{
    const [playing,setPlaying]=useState(false)
    const videoRef=useRef(null)
    const handleVideoPress=()=>{
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        }
        else{
            videoRef.current.play()
            setPlaying(true)
        }
        }
    
    return(
        <div className="video">
            {/* <video src="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4" className="videoplayer" loop ref={videoRef} onClick={handleVideoPress}></video> */}
            <video src={url} className="videoplayer" loop ref={videoRef} onClick={handleVideoPress}></video>
            {/* <video src="https://static.videezy.com/system/resources/previews/000/043/120/original/C0014.mp4" className="videoplayer" loop ref={videoRef} onClick={handleVideoPress}></video> */}
            {/* <video src="https://www.shutterstock.com/shutterstock/videos/1089329197/preview/stock-footage-mountain-and-cliff-in-the-middle-of-the-sea-with-large-cliffs-in-dji-and-fpv-drone-presence-of.webm" className="videoplayer" loop ref={videoRef} onClick={handleVideoPress}></video> */}
            <VideoFooter channel={channel} description={description} />
            <VideoSideBar likes={likes} shares={shares} messages={messages}/>
        </div>
    )
}

export default Video