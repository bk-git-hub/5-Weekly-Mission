import styles from './Button.module.css';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({
  children,
  onClick,
  className,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${styles.btn}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
