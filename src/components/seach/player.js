import React from 'react'
import "./player.css"
import Iframe from 'react-iframe'
import Sidebar from "./../seach/narbar/Sidebar"
import Header from "./../seach/header/Header"
import Video from "./../seach/video/Video"
function player() {     
return (
    <div className="main ">
        <div className="sidebar hide-on-tablet hide-on-mobile">
            <Sidebar/>
        </div>
        <div className="content">
          <Header/>
        <Video/>
        </div>
    </div>    

)
}

export default player

        