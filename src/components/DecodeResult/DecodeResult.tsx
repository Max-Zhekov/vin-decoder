import styles from "./DecodeResult.module.css";

type DecodeItem = {
  Variable: string;
  Value: string | null;
  VariableId?: number;
};

type Props = {
  message: string;
  results: DecodeItem[];
};

const DecodeResult = ({ message, results }: Props) => {
  const filled = results.filter((r) => r.Value);

  return (
    <section className={styles["decode-result"]}>
      <h2 className={styles["decode-result__title"]}>Result</h2>

      {message && <p className={styles["decode-result__message"]}>{message}</p>}

      {filled.length === 0 ? (
        <p className={styles["decode-result__empty"]}>
          No filled values found.
        </p>
      ) : (
        <ul className={styles["decode-result__list"]}>
          {filled.map((r) => (
            <li
              key={r.VariableId ?? `${r.Variable}-${r.Value}`}
              className={styles["decode-result__item"]}>
              <span className={styles["decode-result__variable"]}>
                {r.Variable}
              </span>
              <span className={styles["decode-result__value"]}>
                {String(r.Value)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default DecodeResult;
