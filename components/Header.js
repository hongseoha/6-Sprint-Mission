import styles from './Header.module.css';
import Link from 'next/link';

export default function Header(){
return(
  <header className={styles.header}>
    <div className={styles.container}>
    <Link className={styles.logo} href="#">
      <img src='/logo.png' alt='로고'></img>
    </Link >
    <Link className={styles.nav} href="#">
      자유게시판
    </Link>
    <Link className={styles.nav} href="#">
      중고마켓
    </Link>
    <Link className={styles.profile} href="#"><img src='/user_profile.png' alt='프로필사진'></img></Link>
    </div>
  </header>
)

}
