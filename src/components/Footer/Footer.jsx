import facebookLogo from '../../assets/images/facebook_logo.svg';
import twitterLogo from '../../assets/images/twitter_logo.svg';
import youtubeLogo from '../../assets/images/youtube_logo.svg';
import instagramLogo from '../../assets/images/instagram_logo.svg';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.footerBar}>
        <div className={styles.copyright}>©codeit - 2023</div>
        <div className={styles.policyBar}>
          <a href="/" className={styles.footerLink}>
            Privacy Policy
          </a>
          <a href="/" className={styles.footerLink}>
            FAQ
          </a>
        </div>
        <ul className={styles.infoLinkList}>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={facebookLogo} alt="Facebook link logo" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={twitterLogo} alt="Twitter link logo" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={youtubeLogo} alt="Youtube link logo" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={instagramLogo} alt="Instagram link logo" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
