import { useDispatch } from "react-redux";
import { currentValue } from "redux/slice";
import { FilterInput, FilterLabel } from "components/Filter/Filter.styled";

export const NewFilter = () => {

    const dispatch = useDispatch();

    const handlerChange = evt => (dispatch(currentValue(evt.target.value)));

    return (
        <>
            <FilterLabel htmlFor="filerValue">Find contacts by name</FilterLabel>
            <FilterInput
                name="filter"
                id="filerValue"
                type="text"
                required
                onChange={handlerChange}
            />
        </>
    );
};