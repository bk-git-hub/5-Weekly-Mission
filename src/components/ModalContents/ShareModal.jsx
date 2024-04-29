import facebook from '../../assets/images/facebook.svg';
import share from '../../assets/images/link.svg';
import kakao from '../../assets/images/kakao.svg';
import styles from './ModalContents.module.css';
import { facebookShare } from '../../utils/shareFunctions/facebooShare';
import { kakaoShare } from '../../utils/shareFunctions/kakaoshare';
import { useState } from 'react';

export default function ShareModal({ headerText, subHeaderText, folderNum }) {
  const [showToast, setShowToast] = useState(false);

  const SHARE_URL = `https://bk-part2.netlify.app/shared/${folderNum}`;

  const handleCopyLinkClipBoard = async () => {
    const copiedLink = SHARE_URL;
    try {
      await navigator.clipboard.writeText(copiedLink);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.log(err);
    }
  };

  const SHARE_BUTTONS_INFO = [
    { text: '카카오톡', icon: kakao, onClick: () => kakaoShare(SHARE_URL) },
    {
      text: '페이스북',
      icon: facebook,
      onClick: () => facebookShare(SHARE_URL),
    },
    { text: '링크 복사', icon: share, onClick: handleCopyLinkClipBoard },
  ];

  return (
    <div className={styles.modalContentWrapper}>
      <div className={styles.modalHeaderWrapper}>
        <span className={styles.modalHeader}>{headerText}</span>
        <span className={styles.modalSubHeader}>{subHeaderText}</span>
      </div>
      <ul className={styles.shareButtonBar}>
        {SHARE_BUTTONS_INFO.map((item) => (
          <li key={item.index}>
            <div className={styles.shareButtonWrapper}>
              <button className={styles.shareButton} onClick={item.onClick}>
                <img src={item.icon} alt={item.text} />
              </button>
              <span>{item.text}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className={`${styles.toast} ${showToast ? styles.show : ''}`}>
        URL이 복사되었습니다
      </div>
    </div>
  );
}
