import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./VariablePage.module.css";
import { useVehicleVariablesQuery } from "../../hooks/useVehicleVariables";

const VariablePage = () => {
  const { variableId } = useParams<{ variableId: string }>();
  const id = Number(variableId);

  const { data, isLoading, isError, error } = useVehicleVariablesQuery();

  const variable = useMemo(() => {
    if (!data || Number.isNaN(id)) return null;

    return data.Results.find((value) => value.ID === id) ?? null;
  }, [data, id]);

  if (Number.isNaN(id)) {
    return (
      <div className={styles["variable-page"]}>
        <p className={styles["variable-page__status"]}>Invalid variable id.</p>
        <Link className={styles["variable-page__back"]} to="/variables">
          ← Back to variables
        </Link>
      </div>
    );
  }

  return (
    <div className={styles["variable-page"]}>
      <Link className={styles["variable-page__back"]} to="/variables">
        ← Back to variables
      </Link>

      {isLoading && (
        <p className={styles["variable-page__status"]}>Loading...</p>
      )}

      {isError && (
        <p className={styles["variable-page__status"]}>
          {(error as Error).message}
        </p>
      )}

      {!isLoading && data && !variable && (
        <p className={styles["variable-page__status"]}>Variable not found.</p>
      )}

      {variable && (
        <section className={styles["variable-page__card"]}>
          <div className={styles["variable-page__header"]}>
            <h1 className={styles["variable-page__title"]}>{variable.Name}</h1>
            <span className={styles["variable-page__id"]}>
              ID: {variable.ID}
            </span>
          </div>

          {variable.Description ? (
            <div
              className={styles["variable-page__desc"]}
              dangerouslySetInnerHTML={{ __html: variable.Description }}
            />
          ) : (
            <p className={styles["variable-page__desc"]}>No description.</p>
          )}
        </section>
      )}
    </div>
  );
};

export default VariablePage;
