import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <section className={styles["not-found"]}>
      <h1 className={styles["not-found__title"]}>404</h1>
      <p className={styles["not-found__text"]}>
        Page not found. The link may be incorrect or the page may have been
        moved.
      </p>

      <div className={styles["not-found__actions"]}>
        <Link className={styles["not-found__button"]} to="/">
          Go to VIN Decoder
        </Link>
        <Link className={styles["not-found__link"]} to="/variables">
          View variables
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
