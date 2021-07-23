import video from "../data/video.js";
import Video from "./Video.js";
import VideoInfo from "./VideoInfo.js";
import CommentList from "./CommentList.js"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video video={video}/>
      <VideoInfo video={video}/>
      <CommentList comments={video.comments}/>
    </div>
  );
}

export default App;
