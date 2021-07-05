import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import video from "../../asset/casau.mp4"
export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =video;
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://cdn.tgdd.vn/Files/2021/03/24/1337808/-top-10-phim-ca-sau-gay-can-hap-dan-den-tung-phut-7.jpg"
      />
    
      {isHovered && (
        <>
         <video
        className="video"
        autoPlay
        progress
        controls> <source src={video}/></video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre">Action</div>
          </div>
          
      
          
        </>
        
        
      )}
    </div>
  );
}
