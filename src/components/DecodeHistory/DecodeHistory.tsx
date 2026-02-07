import styles from "./DecodeHistory.module.css";

type Props = {
  items: string[];
  onSelect: (vin: string) => void;
};

const DecodeHistory = ({ items, onSelect }: Props) => {
  if (!items.length) return null;

  return (
    <section className={styles["decode-history"]}>
      <h2 className={styles["decode-history__title"]}>Last decoded</h2>

      <ul className={styles["decode-history__list"]}>
        {items.map((vin) => (
          <li key={vin} className={styles["decode-history__item"]}>
            <button
              type="button"
              className={styles["decode-history__button"]}
              onClick={() => onSelect(vin)}>
              {vin}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DecodeHistory;
