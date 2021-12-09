import PropTypes from "prop-types";
import styles from "./FilterStyle.module.css";

export default function Filter({ value, onChangeFilter }) {
  return (
    <div className={styles.filterContainer}>
      Find contacts by name
      <input
        className={styles.filterInput}
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
