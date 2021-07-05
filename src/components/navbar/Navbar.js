import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import "./navbar.scss";
import {Link} from "react-router-dom"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://scontent.fpnh22-2.fna.fbcdn.net/v/t1.6435-9/190801150_3047073538840591_1241117089856663372_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=J015Ym5RkgMAX9VQxuq&_nc_ht=scontent.fpnh22-2.fna&oh=972ad1411840da57ca6001f57972da68&oe=60E87671"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
      <marquee behavior="scroll" style={{fontSize:'22px'}} >Chào mừng bạn đến với Nguyễn Tiến Tài,ở đây có những bộ phim bản thân mình đã xem và mình muốn đem đến cho mọi
      người một trải nghiệm tải Webside của mình,cảm ơn mọi người đã ghé thăm,chúc các bạn xem phim vui vẻ ,dịch đang tràng lang mong mọi người ở nhà,ăn nhậu thì gần gần đó làm vài lon cho mát,có người yêu thì chịu nhớ để xã hội được yên bình,ra đường nhớ khẩu trang nhé ,I Love You So Much ♥
      </marquee>
    </div>
  );
};

export default Navbar;
