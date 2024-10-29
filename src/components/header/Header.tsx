import { useNavigate, useLocation} from "react-router-dom";
import "./Header.scss";
import { useLoginStore } from "../../store/useLoginStore";
import headerImg from "../../assets/img/lymming_logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const pageLocation = useLocation();
  const { login } = useLoginStore();
  const [isMain,setIsMain]=useState(false);

  console.log("pagelocation",pageLocation.pathname);

  useEffect(()=>{
    if(pageLocation.pathname=="/") setIsMain(true);
  },[pageLocation]);
  
  return (
    <header className={`Header ${isMain?'MainHeader':''}`}>
      <div className="Header-title">
        <img className="Header-title-img" src={headerImg} />
        <span className="Header-title-txt" onClick={() => navigate("/")}>
          lymming
        </span>
      </div>
      <ul className="Header-ul">
        <li onClick={() => navigate("/participate")}>참여하기</li>
        <li onClick={() => navigate("/teambuild")}>팀 꾸리기</li>
        <li>둘러보기</li>
        <li onClick={() => navigate("/videochat")}>화상채팅</li>

        {login == true ? (
          <li className="login_aft">
            <img />
            <span>username</span>
          </li>
        ) : (
          <li onClick={() => navigate("/login")}>로그인</li>
        )}
      </ul>
    </header>
  );
};

export default Header;
