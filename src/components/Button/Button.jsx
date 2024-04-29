import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`${className} ${styles.btn}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
