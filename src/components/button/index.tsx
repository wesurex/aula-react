import styles from './styles.module.css';

type ButtonProps = {
    children?: React.ReactNode;
    background?: string;
}

function Button({ children, background }: ButtonProps) {
  return (
    <button style={{ background }} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;