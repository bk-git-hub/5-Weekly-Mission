import styles from './Button.module.css';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  className,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${styles.btn}`}
      type={type}
      disabled={disabled}
    >
      {disabled ? '처리중' : children}
    </button>
  );
};

export default Button;
