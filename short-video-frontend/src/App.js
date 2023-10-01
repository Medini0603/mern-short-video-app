import logo from './logo.svg';
import './App.css';
import Video from './Video';
// import VideoFooter from './VideoFooter'
import React,{useState,useEffect} from 'react';
import axios from './axios';
function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const req = await axios.get("/video/post");
        setVideos(req.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
          fetchData()
      },[]);
  return (
    <div className="App">
     <div className='app_videos'>
      {/* <Video 
      url="https://static.videezy.com/system/resources/previews/000/043/120/original/C0014.mp4"
      channel="aesthetic edits"
      description="Peaceful Ocean edit"
      likes={345}
      shares={120}
      messages={90}/>
      <Video 
      url="https://www.shutterstock.com/shutterstock/videos/1089329197/preview/stock-footage-mountain-and-cliff-in-the-middle-of-the-sea-with-large-cliffs-in-dji-and-fpv-drone-presence-of.webm"
      channel="mountain edits"
      description="Peaceful Mountain edit"
      likes={345}
      shares={120}
      messages={90}/> */}
      {videos.map(({url,channel,description,likes,shares,messages})=>(
        <Video
        key={url}
        url={url}
        channel={channel}
        description={description}
        likes={likes}
        shares={shares}
        messages={messages}
        />
      ))}
     
     </div>
    </div>
  );
}

export default App;
