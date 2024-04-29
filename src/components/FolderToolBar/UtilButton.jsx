import PropTypes from 'prop-types';
import styles from './FolderToolBar.module.css';

export default function UtilButton({ imgSrc, children, onClick, alt }) {
  return (
    <button className={styles.utilButton} onClick={onClick}>
      <img src={imgSrc} alt={alt} />
      {children}
    </button>
  );
}

UtilButton.propTypes = {
  imgSrc: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  alt: PropTypes.string,
};
