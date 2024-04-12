import './Header.css';

import logoImage from '../asset/face_logo.png';

function Header() {
  return (
    <div className="nav">
      <div className="left-box">
        <img className="logo" src={logoImage} alt="판다마켓" />
        <ul className="navMenu">
          <li><a href='#'>자유게시판</a></li>
          <li><a href='#' className='selected'>중고마켓</a></li>
        </ul>
      </div>
      <a href="login.html">
        <div className="loginBtn">
          <p className="loginBtn-text">로그인</p>
        </div>
      </a>
    </div>
  );
}

export default Header;
