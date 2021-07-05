import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import video from "../../asset/video.mp4"

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        // autoPlay
        progress
        controls> <source src={video} type="video/mp4"/></video>
          </div>
  );
}
