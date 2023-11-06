import { useDispatch } from "react-redux";
import { currentFilter } from "redux/filterSlice";
import { FilterInput, FilterLabel } from "components/Filter/Filter.styled";


export const Filter = () => {

    const dispatch = useDispatch();
    
    const handlerChange = evt => (dispatch(currentFilter(evt.target.value.toLowerCase())));

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