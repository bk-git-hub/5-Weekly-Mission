import styles from './Button.module.css';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${className} ${styles.btn}`}>
      {children}
    </button>
  );
};

export default Button;
