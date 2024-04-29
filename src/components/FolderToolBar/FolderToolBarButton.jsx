import PropTypes from 'prop-types';
import styles from './FolderToolBar.module.css';

const styleFooterNameButton = styles.folderNameButton;
const styleFocusedButton = styles.focusedButton;

export default function FolderToolBarButton({
  id,
  children,
  onClick,
  isFocused,
}) {
  const handleClick = () => {
    onClick(id);
  };
  return (
    <button
      onClick={handleClick}
      className={`${styleFooterNameButton} ${
        isFocused ? styleFocusedButton : ''
      }`}
    >
      {children}
    </button>
  );
}

FolderToolBarButton.propTypes = {
  id: PropTypes.number,
  children: PropTypes.node,
  onClick: PropTypes.func,
  isFocused: PropTypes.bool,
};
