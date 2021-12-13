import video from "../data/video.js";
import Body from "./Body.js";

function App() {

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h1>{video.title}</h1>
        <Body data={video}/>
    </div>
  );
}

export default App;
