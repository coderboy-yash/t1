import styles from "./styles.module.scss";

export default function Square({ className,draw, value, onSquareClick }) {
  return (
    <button className={`${styles.square}  ${className? styles.highlighted:" "}  ${draw? styles.greyed:" "}`} onClick={onSquareClick}>
      {value}
    </button>
  );
}
