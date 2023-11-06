import { useDispatch, useSelector } from "react-redux";
import { ItemBtn, ItemText, ListItem } from "components/ContactList/ContactList.styled";
import { deleteContact } from "redux/contactsSlice";


export const ContactList = () => {

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  
  const dispatch = useDispatch();

  const filterContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  };

  return (
    <ul>
      {filterContacts().map(filteredContact => (
        <ListItem key={filteredContact.id}>
          <ItemText>
            {filteredContact.name}: {filteredContact.number}
          </ItemText>
              
          <ItemBtn onClick={() => (dispatch(deleteContact(filteredContact.id)))}>
            Delete
          </ItemBtn>

        </ListItem>
      ))}
    </ul>
  );
};