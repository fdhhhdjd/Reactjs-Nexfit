import React from "react"
import "./header.scss"

import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications, MdApps } from "react-icons/md"
const Header = ({ handleToggleSidebar }) => {
   return (
      <div className="header ">
         <FaBars
            className="header__menu"
            size={26}
            onClick={() => handleToggleSidebar()}
         />

         <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            className="header__logo"
         />

         <form>
            <input type="text" placeholder="Search" />
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
   )
}

export default Header