import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications, MdApps } from "react-icons/md"
import "./url.css"
var getYoutubeID = require("get-youtube-id")
function Url() {
    const [id,setid]=useState("")
    function handleClick(e){
        console.log(e.target.value);
        setid(getYoutubeID(e.target.value))
    }
    function ontextinputchange(e){
        e.preventDefault();
       }
    const opts = {
        height: '400',
        width: '800',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
    return (
        <div>
        <div className="header ">
        <FaBars
           className="header__menu"
           size={26}
           
        />

        <img
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
           alt=""
           className="header__logo"
        />

        <form onSubmit={ontextinputchange}>
           <input type="text" placeholder="Search Url " onChange={handleClick}/>
           <button type="submit">
              <AiOutlineSearch size={22} />
           </button>
           
        </form>
     

        <dic className="header__icons">
           <MdNotifications size={28} />
           <MdApps size={28} />
           <img
              src="https://scontent.fpnh22-2.fna.fbcdn.net/v/t1.6435-9/190801150_3047073538840591_1241117089856663372_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=J015Ym5RkgMAX_YNmfo&_nc_ht=scontent.fpnh22-2.fna&oh=224b5e0a83180b7ed96a8f0d5175d9df&oe=60E481F1"
              alt="avatar"
           />
        </dic>
        
     </div>
     <YouTube  className="tientai" videoId={id} opts={opts} onReady={handleClick}/>
     <div className="marquee">
     <marquee  style={{fontSize:'22px'}} >Chào mừng bạn đến với Nguyễn Tiến Tài ,ở đây có những bộ phim bản thân mình đã xem và mình muốn đem đến cho mọi
      người một trải nghiệm tải Webside của mình,cảm ơn mọi người đã ghé thăm,chúc các bạn xem phim vui vẻ ,dịch đang tràng lang mong mọi người ở nhà,ăn nhậu thì gần gần đó ra đường nhớ khẩu trang nhé ♥
      </marquee>
     </div>
     </div>
    )
}

export default Url


{/* <div>
            <input type="text" 
            onChange={handleClick}
            placeholder="Nhap muon tim" required/>
             <YouTube videoId={id} opts={opts} onReady={handleClick}/>;
        </div> */}
// import React from 'react';
// import YouTube from 'react-youtube';
// class Url extends React.Component {
//     render() {
        
//         const opts = {
//             height: '390',
//             width: '640',
//             playerVars: {
//               // https://developers.google.com/youtube/player_parameters
//               autoplay: 1,
//             },
//           };
      
//           return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />
//     }
//     _onReady(event) {
//         // access to player in all event handlers via event.target
//         event.target.pauseVideo();
//       }
// }


// export default Url;