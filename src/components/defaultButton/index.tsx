import styles from "./styles.module.css";

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
};

function DefaultButton({
  icon,
  color = "green",
  ...props
}: DefaultButtonProps) {
  return (
    <div className="containerButton">
      <button className={`${styles.defaultButton} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </div>
  );
}

export default DefaultButton;
