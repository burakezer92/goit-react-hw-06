import { useDispatch } from "react-redux";
import { changeFilter } from "../../../redux/actions";

function SearchBox() {
  const dispatch = useDispatch();

  function handleOnChange(e) {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  }

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleOnChange} />
    </div>
  );
}

export default SearchBox;
