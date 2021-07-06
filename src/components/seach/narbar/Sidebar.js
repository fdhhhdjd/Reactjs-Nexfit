import React from "react"
import "./sidebar.scss"
import {Link} from "react-router-dom"
import {
   MdSubscriptions,
   MdExitToApp,
   MdThumbUp,
   MdHistory,
   MdLibraryBooks,
   MdHome,
   MdSentimentDissatisfied,
} from "react-icons/md"

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
   return (
      <nav
         className={sidebar ? "sidebar open" : "sidebar"}
         onClick={() => handleToggleSidebar(false)}>
         <li>
            <MdHome size={23} />
            <span>Home</span>
         </li>
         <li>
            <MdSubscriptions size={23} />
            <span>Subscriptions</span>
         </li>

         <li>
            <MdThumbUp size={23} />
            <span>Liked Video</span>
         </li>

         <li>
            <MdHistory size={23} />
            <span>History</span>
         </li>

         <li>
            <MdLibraryBooks size={23} />
            <span>Library</span>
         </li>
         <li>
            <MdSentimentDissatisfied size={23} />
            <span>I don't Know</span>
         </li>

         <hr />
<Link to="/login">
         <li>
            <MdExitToApp size={23} />
            <span>Log Out</span>
         </li>
         </Link>
         <hr />
         <li>
            <img src="https://yt3.ggpht.com/a-/AOh14GixdVjxqi11Md_OCDd3K7SOQEhizq4f3EI_0g=s68-c-k-c0x00ffffff-no-rj-mo" />
            <span>Tai heo</span>
         </li>
         <li>
            <img src="https://yt3.ggpht.com/PCkU5EjE7J-ECMMlnIYYl4IcokgSnPqUpIykwjZbNTL165sz8379PvIo3OZyKwva-zjiARLX5b0=s88-c-k-c0x00ffffff-no-rj"/>
            <span>Thế giới phim</span>
         </li>
         <li>
            <img src="https://yt3.ggpht.com/NgiSqZNIK1MRAy7gzEOI5Gg-giFL176ywbTsf3hsTrwGYE0qQojsAX-gEgqMZOLXR0zTunXtppU=s68-c-k-c0x00ffffff-no-rj"/>
            <span>Dj Trang Moond</span>
         </li>
         <li>
            <img src="https://yt3.ggpht.com/pgJNeDfK-tp8ST828d1GuGRjpbL6PBKZJL8lzQLsY7Mn_SZY5rKhLm6fNb-AUtTHVhuFlBrhbA=s68-c-k-c0x00ffffff-no-rj"/>
            <span>Entertainment</span>
         </li>
         <li>
            <img src="https://yt3.ggpht.com/ytc/AKedOLTivkf5vB91lhwxCFmsmiDbHHBzxfh5aAig3iC1AQ=s68-c-k-c0x00ffffff-no-rj"/>
            <span>HTV3 TV</span>
         </li>
         <li>
            <img src="https://yt3.ggpht.com/ytc/AKedOLQSvroERK3SQMkR-zLiM8QXFWlArPy1XHfmUJJncA=s68-c-k-c0x00ffffff-no-rj"/>
            <span>Phim mới</span>
         </li>
         <li>
            <img src="https://yt3.ggpht.com/ytc/AKedOLSvjPQgXtM728XltNsmxJOk225napnT3uNvV9gt=s68-c-k-c0x00ffffff-no-rj"/>
            <span>Star Movies</span>
         </li>
         <li>
            <img src="https://yt3.ggpht.com/ytc/AKedOLQLeCJ1cSOHUoootpMSPsW5n5xs5fMZVdvvLOoL=s68-c-k-c0x00ffffff-no-rj"/>
            <span>Netflix</span>
         </li>
         <li>
            <img src="https://yt3.ggpht.com/pvt00pjziCguBcnTLxLDnblxyeAH3LPhEQjzALLGOMm4HuxIGwKIPhYy-foSVfvxlANTU3ntXg=s68-c-k-c0x00ffffff-no-rj"/>
            <span>Kho phim</span>
         </li>
         <li>
            <img src="https://yt3.ggpht.com/ytc/AKedOLRancJ1aiNh41qNlsSpJbQg-nKfrlx3JpQguTeS=s68-c-k-c0x00ffffff-no-rj"/>
            <span>Yêu siêu nhân</span>
         </li>
         <li>
            <img src="https://yt3.ggpht.com/ytc/AKedOLQIbSykWI9Zz6QQSiGXag1j8IrdQGnTVF2YrcrC=s88-c-k-c0x00ffffff-no-rj"/>
            <span>Hài Animation</span>
         </li>
         <li>
            <img src="https://yt3.ggpht.com/ytc/AKedOLTWGzZyJRivQxKbHVJCR2pUfDQqAhK_-l4iWFHbZQ=s68-c-k-c0x00ffffff-no-rj"/>
            <span>Phim giải trí</span>
         </li>
         <li>
            <img src="https://yt3.ggpht.com/ytc/AKedOLS0_8Eb99PwVL_DhysKXBT5zKiqbIhC5x2DnaaJmWQ=s68-c-k-c0x00ffffff-no-rj"/>
            <span>SKL Movie</span>
         </li>
         <li>
            <img src="https://yt3.ggpht.com/ytc/AKedOLQFXZgfxzYzm9OpOMDvsJPMpgxH6rImPsbpGvOW4A=s68-c-k-c0x00ffffff-no-rj"/>
            <span>HBO Movies</span>
         </li>
         <li>
            <img src="https://yt3.ggpht.com/ytc/AKedOLQJyhKAVBqtQbycqeLWzlhQwy-wTeaR2xgpG5YI=s68-c-k-c0x00ffffff-no-rj"/>
            <span>Fan Châu Tinh Trì Vlog</span>
         </li>
         <li>
            <img src="https://yt3.ggpht.com/ytc/AKedOLTTYOXCJjLMRs8-zHm5zH3syeuzspN2tmclkJKz=s88-c-k-c0x00ffffff-no-rj"/>
            <span>Công chúa Anime</span>
         </li>
         <li>
            <img src="https://yt3.ggpht.com/ytc/AKedOLSRpbvv6_mYk6y67iW5V8ZmJaT8Duc_gjL2Cuaurg=s68-c-k-c0x00ffffff-no-rj"/>
            <span>Tiến tài Dev</span>
         </li>
         <li>
            <img src="https://yt3.ggpht.com/ytc/AKedOLQ9UKkQRNiRMRePXVDySaiivSaUaaes16rnJIsyLQ=s68-c-k-c0x00ffffff-no-rj"/>
            <span>Phim Movies</span>
         </li>
         <li>
            <img src="https://yt3.ggpht.com/ytc/AKedOLR-TP_Uc-gh9UWENj1CsWNVyxDRwCikaVARVwhY=s68-c-k-c0x00ffffff-no-rj"/>
            <span>Tam Mao TV</span>
         </li>

      </nav>
   )
}


export default Sidebar
