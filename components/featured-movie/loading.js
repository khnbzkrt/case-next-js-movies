import Loading from "../loading";
import styles from "./styles.module.css";

export default function FeaturedMoviesLoading() {
  return (
    <div className={styles.movieWrapper} style={{ height: 278 }}>
      <Loading />
    </div>
  );
}
