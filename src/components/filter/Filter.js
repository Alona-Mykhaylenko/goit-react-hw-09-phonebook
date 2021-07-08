import { useSelector, useDispatch } from "react-redux";
import { handleChange } from "../../redux/app-actions";
import { getFilterSelector } from "../../redux/contacts-selectors";
import styles from "./filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterSelector);

  const onChange = (event) => dispatch(handleChange(event.target.value));

  return (
    <div className={styles.formBox}>
      <label>
        Find contacts by name <br />
        <input type="text" name="filter" value={filter} onChange={onChange} />
      </label>
    </div>
  );
}
