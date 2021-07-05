import React from 'react'
import Iframe from 'react-iframe'
import "./grid.css"
import "./video.scss"
// import "./player.css"
import { AiFillEye } from 'react-icons/ai'
function Video() {
    return (
        
        <div class="grid wide container">
        <div class="row ">
            <div class="col l-3 m-6 c-12 ">
                <div class="item">
                   
                    <Iframe id="player"
                        type="text/html"
                        width= "285px"
                        height= '166px'
                        id="myId"
                        url="https://www.youtube.com/embed/PZLuFkzq0sg" //copy cai id thoi la dc
                        frameborder="0"         
                        allow="fullscreen"
                        disablekb="1"

                />     
                 <span>01:06:42</span>
                </div>
               <div className='video__title'> 
                   Phim Spiderman
               </div>
                  <div className='video__details'>
                <span>
                   <AiFillEye /> 5m Views •
               </span>
              <span>5 days ago</span>
                </div>
                   <div className='video__channel'>
                       <img
                      src='https://yt3.ggpht.com/a-/AOh14GixdVjxqi11Md_OCDd3K7SOQEhizq4f3EI_0g=s68-c-k-c0x00ffffff-no-rj-mo'
                     alt=''
                        />
                     <p>Taiheo</p>
                     </div>
            </div>
            <div class="col l-3 m-6 c-12 ">
                <div class="item one">
                   
                    <Iframe id="player"
                        type="text/html"
                        width= "285px"
                        height= '166px'
                        id="myId"
                        url="https://www.youtube.com/embed/yOY-DecRqgQ" //copy cai id thoi la dc
                        frameborder="0"         
                        allow="fullscreen"
                />      
                <span>01:03:34</span>
                <div className='video__title'> 
                  Biệt đội người sắt
               </div>
               <div className='video__details'>
                <span>
                   <AiFillEye /> 25m Views •
               </span>
              <span>31 days ago</span>
                </div>
                   <div className='video__channel'>
                       <img
                      src='https://yt3.ggpht.com/PCkU5EjE7J-ECMMlnIYYl4IcokgSnPqUpIykwjZbNTL165sz8379PvIo3OZyKwva-zjiARLX5b0=s88-c-k-c0x00ffffff-no-rj'
                     alt=''
                        />
                     <p>Thế giới phim</p>
                     </div>
                </div>
            </div>
            <div class="col l-3 m-6 c-12 ">
                <div class="item true">
                 
                    <Iframe id="player"
                        type="text/html"
                        width= "285px"
                        height= '166px'
                        id="myId"
                        url="https://www.youtube.com/embed/O3w_HvVS6rc" //copy cai id thoi la dc
                        frameborder="0"         
                        allow="fullscreen"
                />     
                 <span>01:38:38</span>
                <div className='video__title'> 
                 Sát thủ máu lạnh
               </div>
               <div className='video__details'>
                <span>
                   <AiFillEye /> 14m Views •
               </span>
              <span>1 year ago</span>
                </div>
                   <div className='video__channel'>
                       <img
                      src='https://yt3.ggpht.com/NgiSqZNIK1MRAy7gzEOI5Gg-giFL176ywbTsf3hsTrwGYE0qQojsAX-gEgqMZOLXR0zTunXtppU=s68-c-k-c0x00ffffff-no-rj'
                     alt=''
                        />
                     <p>Dj Trang Moond</p>
                     </div>
                </div>
            </div>
            <div class="col l-3 m-6 c-12 ">
                <div class="item three">
                    
                    <Iframe id="player"
                        type="text/html"
                        width= "285px"
                        height= '166px'
                        id="myId"
                        url="https://www.youtube.com/embed/8VmyJPNjcuU" //copy cai id thoi la dc
                        frameborder="0"         
                        allow="fullscreen"
                />     
                 <span>01:06:42</span>
                <div className='video__title'> 
                  Phi vụ hạt dẻ(hoạt hình)
               </div>
               <div className='video__details'>
                <span>
                   <AiFillEye /> 9m Views •
               </span>
              <span>18 days ago</span>
                </div>
                   <div className='video__channel'>
                       <img
                      src='https://yt3.ggpht.com/pgJNeDfK-tp8ST828d1GuGRjpbL6PBKZJL8lzQLsY7Mn_SZY5rKhLm6fNb-AUtTHVhuFlBrhbA=s68-c-k-c0x00ffffff-no-rj'
                     alt=''
                        />
                     <p>Entertainment</p>
                     </div>
                </div>
            </div>
            {/* row-2 */}
            <div class="col l-3 m-6 c-12 ">
                <div class="item">
                 
                    <Iframe id="player"
                        type="text/html"
                        width= "285px"
                        height= '166px'
                        id="myId"
                        url="https://www.youtube.com/embed/57NChmFB_wo" //copy cai id thoi la dc
                        frameborder="0"         
                        allow="fullscreen"
                />     
                 <span>01:33:10</span>
                <div className='video__title'> 
                  Thám tử lừng danh Connan
               </div>
               <div className='video__details'>
                <span>
                   <AiFillEye /> 30m Views •
               </span>
              <span> 6 months ago</span>
                </div>
                   <div className='video__channel'>
                       <img
                      src='https://yt3.ggpht.com/ytc/AKedOLSTbgU0Y8Ie8sNngIIaXe516qukNLszx2BXzEoUog=s68-c-k-c0x00ffffff-no-rj'
                     alt=''
                        />
                     <p>HTV3 TV</p>
                     </div>
                </div>
            </div>
            <div class="col l-3 m-6 c-12 ">
                <div class="item one">
                   
                    <Iframe id="player"
                        type="text/html"
                        width= "285px"
                        height= '166px'
                        id="myId"
                        url="https://www.youtube.com/embed/7XkQdDX-6vE" //copy cai id thoi la dc
                        frameborder="0"         
                        allow="fullscreen"
                />     
                 <span>01:33:16</span>
                <div className='video__title'> 
                   Cá mập ăn thịt người (kinh dị)
               </div>
               <div className='video__details'>
                <span>
                   <AiFillEye /> 90m Views •
               </span>
              <span>3 year ago</span>
                </div>
                   <div className='video__channel'>
                       <img
                      src='https://yt3.ggpht.com/ytc/AKedOLTivkf5vB91lhwxCFmsmiDbHHBzxfh5aAig3iC1AQ=s68-c-k-c0x00ffffff-no-rj'
                     alt=''
                        />
                     <p>Phim mới</p>
                     </div>
                </div>
            </div>
            <div class="col l-3 m-6 c-12  ">
                <div class="item true">
                   
                    <Iframe id="player"
                        type="text/html"
                        width= "285px"
                        height= '166px'
                        id="myId"
                        url="https://www.youtube.com/embed/lCkTLbZO4u8" //copy cai id thoi la dc
                        frameborder="0"         
                        allow="fullscreen"
                />     
                 <span>01:40:37</span>
                <div className='video__title'> 
                    Bộ lạc ăn thịt người(kinh dị)
               </div>
               <div className='video__details'>
                <span>
                   <AiFillEye /> 13m Views •
               </span>
              <span>19 days ago</span>
                </div>
                   <div className='video__channel'>
                       <img
                      src='https://yt3.ggpht.com/ytc/AKedOLQSvroERK3SQMkR-zLiM8QXFWlArPy1XHfmUJJncA=s68-c-k-c0x00ffffff-no-rj'
                     alt=''
                        />
                     <p>Star Movies</p>
                     </div>
                </div>
            </div>
            <div class="col l-3 m-6 c-12 ">
                <div class="item three">
                 
                    <Iframe id="player"
                        type="text/html"
                        width= "285px"
                        height= '166px'
                        id="myId"
                        url="https://www.youtube.com/embed/CCu2xmgsF9s" //copy cai id thoi la dc
                        frameborder="0"         
                        allow="fullscreen"
                />     
                 <span>01:33:46</span>
                <div className='video__title'> 
                   Cá sấu ăn khổng lồ (kinh dị)
               </div>
               <div className='video__details'>
                <span>
                   <AiFillEye /> 100m Views •
               </span>
              <span>3 months ago</span>
                </div>
                   <div className='video__channel'>
                       <img
                      src='https://yt3.ggpht.com/ytc/AKedOLSvjPQgXtM728XltNsmxJOk225napnT3uNvV9gt=s68-c-k-c0x00ffffff-no-rj'
                     alt=''
                        />
                     <p>Netflix</p>
                     </div>
                </div>
            </div>
            {/* row-3 */}
            <div class="col l-3 m-6 c-12 ">
                <div class="item">
               
                    <Iframe id="player"
                        type="text/html"
                        width= "285px"
                        height= '166px'
                        id="myId"
                        url="https://www.youtube.com/embed/PVU6v_APLcc" //copy cai id thoi la dc
                        frameborder="0"         
                        allow="fullscreen"
                />     
                 <span>01:15:34</span>
                <div className='video__title'> 
                  Xe tải Optimus(Hành động)
               </div>
               <div className='video__details'>
                <span>
                   <AiFillEye /> 200m Views •
               </span>
              <span>31 days ago</span>
                </div>
                   <div className='video__channel'>
                       <img
                      src='https://yt3.ggpht.com/ytc/AKedOLQLeCJ1cSOHUoootpMSPsW5n5xs5fMZVdvvLOoL=s68-c-k-c0x00ffffff-no-rj'
                     alt=''
                        />
                     <p>Kho phim </p>
                     </div>
                </div>
            </div>
            <div class="col l-3 m-6 c-12  ">
                <div class="item one">
                    
                    <Iframe id="player"
                        type="text/html"
                        width= "285px"
                        height= '166px'
                        id="myId"
                        url="https://www.youtube.com/embed/TzKf6enyqSk" //copy cai id thoi la dc
                        frameborder="0"         
                        allow="fullscreen"
                />     
                 <span>01:45:12</span>
                <div className='video__title'> 
                   Tây du kí(Chiếu rạp)
               </div>
               <div className='video__details'>
                <span>
                   <AiFillEye /> 90m Views •
               </span>
              <span>25 days ago</span>
                </div>
                   <div className='video__channel'>
                       <img
                      src='https://yt3.ggpht.com/pvt00pjziCguBcnTLxLDnblxyeAH3LPhEQjzALLGOMm4HuxIGwKIPhYy-foSVfvxlANTU3ntXg=s68-c-k-c0x00ffffff-no-rj'
                     alt=''
                        />
                     <p>Movies start</p>
                     </div>
                </div>
            </div>
            <div class="col l-3 m-6 c-12 ">
                <div class="item true">
                  
                    <Iframe id="player"
                        type="text/html"
                        width= "285px"
                        height= '166px'
                        id="myId"
                        url="https://www.youtube.com/embed/aHSGz7WMuQk" //copy cai id thoi la dc
                        frameborder="0"         
                        allow="fullscreen"
                />     
                 <span>01:20:34</span>
                <div className='video__title'> 
                   Siêu nhân tổng hợp
               </div>
               <div className='video__details'>
                <span>
                   <AiFillEye /> 9.1m Views •
               </span>
              <span>5 months ago</span>
                </div>
                   <div className='video__channel'>
                       <img
                      src='https://yt3.ggpht.com/ytc/AKedOLRancJ1aiNh41qNlsSpJbQg-nKfrlx3JpQguTeS=s68-c-k-c0x00ffffff-no-rj'
                     alt=''
                        />
                     <p>Yêu siêu nhân</p>
                     </div>
                </div>
            </div>
            <div class="col l-3 m-6 c-12 ">
                <div class="item three">
                    
                    <Iframe id="player"
                        type="text/html"
                        width= "285px"
                        height= '166px'
                        id="myId"
                        url="https://www.youtube.com/embed/cqM_HFH3ueg" //copy cai id thoi la dc
                        frameborder="0"         
                        allow="fullscreen"
                />     
                 <span>39:29</span>
                <div className='video__title'> 
                   Larva Tubar(Hoạt hình vui nhộn)
               </div>
               <div className='video__details'>
                <span>
                   <AiFillEye /> 50m Views •
               </span>
              <span> 8 months ago</span>
                </div>
                   <div className='video__channel'>
                       <img
                      src='https://yt3.ggpht.com/ytc/AKedOLQIbSykWI9Zz6QQSiGXag1j8IrdQGnTVF2YrcrC=s88-c-k-c0x00ffffff-no-rj'
                     alt=''
                        />
                     <p>Hài Animation</p>
                     </div>
                </div>
            </div>
            {/* row 4 */}
            <div class="col l-3 m-6 c-12 ">
                <div class="item three">
                    
                    <Iframe id="player"
                        type="text/html"
                        width= "285px"
                        height= '166px'
                        id="myId"
                        url="https://www.youtube.com/embed/Nx2kgbRMxMc" //copy cai id thoi la dc
                        frameborder="0"         
                        allow="fullscreen"
                />     
                 <span>01:45:49</span>
                <div className='video__title'> 
                Bố Già 2021 Phim Chiếu Rạp Full Video
               </div>
               <div className='video__details'>
                <span>
                   <AiFillEye /> 113.191 Views •
               </span>
              <span> 6 months ago</span>
                </div>
                   <div className='video__channel'>
                       <img
                      src='https://yt3.ggpht.com/ytc/AKedOLTWGzZyJRivQxKbHVJCR2pUfDQqAhK_-l4iWFHbZQ=s68-c-k-c0x00ffffff-no-rj'
                     alt=''
                        />
                     <p>Phim  giải trí</p>
                     </div>
                </div>
            </div>
            <div class="col l-3 m-6 c-12 ">
                <div class="item three">
                    
                    <Iframe id="player"
                        type="text/html"
                        width= "285px"
                        height= '166px'
                        id="myId"
                        url="https://www.youtube.com/embed/tT14EFVqRiA" //copy cai id thoi la dc
                        frameborder="0"         
                        allow="fullscreen"
                />     
                 <span>01:38:22</span>
                <div className='video__title'> 
                PHIM HÀNH ĐỘNG VÕ THUẬT 2021 - TRUYỀN THUYẾT ĐẢ CẨU BỔNG [FULL HD] - Phim Mới 2021

               </div>
               <div className='video__details'>
                <span>
                   <AiFillEye /> 7m Views •
               </span>
              <span> 2 months ago</span>
                </div>
                   <div className='video__channel'>
                       <img
                      src='https://yt3.ggpht.com/ytc/AKedOLS0_8Eb99PwVL_DhysKXBT5zKiqbIhC5x2DnaaJmWQ=s68-c-k-c0x00ffffff-no-rj'
                     alt=''
                        />
                     <p>SKL Movie</p>
                     </div>
                </div>
            </div>
            <div class="col l-3 m-6 c-12 ">
                <div class="item three">
                    
                    <Iframe id="player"
                        type="text/html"
                        width= "285px"
                        height= '166px'
                        id="myId"
                        url="https://www.youtube.com/embed/AneOCkx1rBI" //copy cai id thoi la dc
                        frameborder="0"         
                        allow="fullscreen"
                />     
                 <span>01:35:36</span>
                <div className='video__title'> 
                BĂNG CƯỚP THẾ KỶ 
               </div>
               <div className='video__details'>
                <span>
                   <AiFillEye /> 90m Views •
               </span>
              <span> 12 months ago</span>
                </div>
                   <div className='video__channel'>
                       <img
                      src='https://yt3.ggpht.com/ytc/AKedOLQFXZgfxzYzm9OpOMDvsJPMpgxH6rImPsbpGvOW4A=s68-c-k-c0x00ffffff-no-rj'
                     alt=''
                        />
                     <p>HBO Movies</p>
                     </div>
                </div>
            </div>
            <div class="col l-3 m-6 c-12 ">
                <div class="item three">
                    
                    <Iframe id="player"
                        type="text/html"
                        width= "285px"
                        height= '166px'
                        id="myId"
                        url="https://www.youtube.com/embed/E6evf9kPsdM" //copy cai id thoi la dc
                        frameborder="0"         
                        allow="fullscreen"
                />     
                 <span>01:28:08</span>
                <div className='video__title'> 
                Châu Tinh Trì Mới Nhất Năm 2018 - Vượt Ngục
               </div>
               <div className='video__details'>
                <span>
                   <AiFillEye /> 7.834.669 Views •
               </span>
              <span> 3 years ago</span>
                </div>
                   <div className='video__channel'>
                       <img
                      src='https://yt3.ggpht.com/ytc/AKedOLQJyhKAVBqtQbycqeLWzlhQwy-wTeaR2xgpG5YI=s68-c-k-c0x00ffffff-no-rj'
                     alt=''
                        />
                     <p>Fan Châu Tinh Trì Vlog</p>
                     </div>
                </div>
            </div>
            {/* row 5 */}
            <div class="col l-3 m-6 c-12 ">
                <div class="item three">
                    
                    <Iframe id="player"
                        type="text/html"
                        width= "285px"
                        height= '166px'
                        id="myId"
                        url="https://www.youtube.com/embed/F_VADDOCqiE" //copy cai id thoi la dc
                        frameborder="0"         
                        allow="fullscreen"
                />     
                 <span>44:56</span>
                <div className='video__title'> 
                Nhac Phim Remix 2019 cong chua soi .
               </div>
               <div className='video__details'>
                <span>
                   <AiFillEye /> 2m Views •
               </span>
              <span> 11 months ago</span>
                </div>
                   <div className='video__channel'>
                       <img
                      src='https://yt3.ggpht.com/ytc/AKedOLTTYOXCJjLMRs8-zHm5zH3syeuzspN2tmclkJKz=s88-c-k-c0x00ffffff-no-rj'
                     alt=''
                        />
                     <p>Công chúa Anime</p>
                     </div>
                </div>
            </div>
            <div class="col l-3 m-6 c-12 ">
                <div class="item three">
                    
                    <Iframe id="player"
                        type="text/html"
                        width= "285px"
                        height= '166px'
                        id="myId"
                        url="https://www.youtube.com/embed/GXmwlUSK_n8" //copy cai id thoi la dc
                        frameborder="0"         
                        allow="fullscreen"
                />     
                 <span>01:36:24</span>
                <div className='video__title'> 
                Khuyển Dạ Xoa 1 – Mối Giao Cảm Vượt Thời Gian (Thuyết Minh)
               </div>
               <div className='video__details'>
                <span>
                   <AiFillEye /> 27.159.012m Views •
               </span>
              <span> 2 months ago</span>
                </div>
                   <div className='video__channel'>
                       <img
                      src='https://yt3.ggpht.com/ytc/AKedOLSRpbvv6_mYk6y67iW5V8ZmJaT8Duc_gjL2Cuaurg=s68-c-k-c0x00ffffff-no-rj'
                     alt=''
                        />
                     <p>Tiến tài Dev</p>
                     </div>
                </div>
            </div>
            <div class="col l-3 m-6 c-12 ">
                <div class="item three">
                    
                    <Iframe id="player"
                        type="text/html"
                        width= "285px"
                        height= '166px'
                        id="myId"
                        url="https://www.youtube.com/embed/cqM_HFH3ueg" //copy cai id thoi la dc
                        frameborder="0"         
                        allow="fullscreen"
                />     
                 <span>01:30:30</span>
                <div className='video__title'> 
                SÁT THỦ PHẢN ĐÒN | Phim Mỹ Chiếu Rạp
               </div>
               <div className='video__details'>
                <span>
                   <AiFillEye /> 415.169tr Views •
               </span>
              <span> 1months ago</span>
                </div>
                <div className='video__channel'>
                       <img
                      src='https://yt3.ggpht.com/ytc/AKedOLQ9UKkQRNiRMRePXVDySaiivSaUaaes16rnJIsyLQ=s68-c-k-c0x00ffffff-no-rj'
                     alt=''
                        />
                     <p>Phim Movies</p>
                     </div>
                </div>
            </div>
            <div class="col l-3 m-6 c-12 ">
                <div class="item three">
                    
                    <Iframe id="player"
                        type="text/html"
                        width= "285px"
                        height= '166px'
                        id="myId"
                        url="https://www.youtube.com/embed/BhOuScVQEk4" //copy cai id thoi la dc
                        frameborder="0"         
                        allow="fullscreen"
                />     
                 <span>01:21:49</span>
                <div className='video__title'> 
                SÁT THỦ BÁO THÙ | Phim Mỹ Chiếu Rạp Mới Nhất Thuyết Minh
               </div>
               <div className='video__details'>
                <span>
                   <AiFillEye /> 4.202.955m Views •
               </span>
              <span> 5 months ago</span>
                </div>
                   <div className='video__channel'>
                       <img
                      src="https://yt3.ggpht.com/ytc/AKedOLR-TP_Uc-gh9UWENj1CsWNVyxDRwCikaVARVwhY=s68-c-k-c0x00ffffff-no-rj"
                     alt=''
                        />
                     <p>Tam Mao TV</p>
                     </div>
                </div>
            </div>
         
            
            
        </div>
    </div>  
    )
}

export default Video
