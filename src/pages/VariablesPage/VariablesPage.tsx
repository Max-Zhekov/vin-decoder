import { Link } from "react-router-dom";
import styles from "./VariablesPage.module.css";
import { useVehicleVariablesQuery } from "../../hooks/useVehicleVariables";

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").trim();
}

const VariablesPage = () => {
  const { data, isLoading, isError, error } = useVehicleVariablesQuery();

  return (
    <div className={styles["variables-page"]}>
      <h1 className={styles["variables-page__title"]}>Variables</h1>

      {isLoading && (
        <p className={styles["variables-page__status"]}>Loading...</p>
      )}
      {error && <p className={styles["variables-page__status"]}>{isError}</p>}

      {data && (
        <ul className={styles["variables-page__list"]}>
          {data.Results.map((v) => (
            <li key={v.ID} className={styles["variables-page__item"]}>
              <Link
                to={`/variables/${v.ID}`}
                className={styles["variables-page__link"]}>
                <span className={styles["variables-page__name"]}>{v.Name}</span>
                <span className={styles["variables-page__id"]}>ID: {v.ID}</span>
              </Link>

              {v.Description && (
                <p className={styles["variables-page__desc"]}>
                  {stripHtml(v.Description)}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VariablesPage;
