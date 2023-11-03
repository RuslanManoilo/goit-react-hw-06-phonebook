import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NewContactForm } from "./newContactForm";
import { NewFilter } from "./newFilter";
import { NewContactList } from "./newContactList";
import { Container, SecondTitle, Title } from "components/GlobalStyle";
import { getContacts } from "redux/slice";


export const NewApp = () => {

  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();


  useEffect(() => {

    const savedContacts = localStorage.getItem("contacts-list");
    const parsedContacts = JSON.parse(savedContacts);
    
    if (savedContacts === null) {
      return;
    };
    
    dispatch(getContacts(parsedContacts));

  }, [dispatch]);

  
  useEffect(() => {

    if (contacts.length === 0) {
      return;
    };

    localStorage.setItem("contacts-list", JSON.stringify(contacts));

  }, [contacts]);

  return (
    <Container>
      <Title>Phonebook</Title>

      <NewContactForm />

      <SecondTitle>Contacts</SecondTitle>

      <NewFilter />
      <NewContactList />

    </Container>
  );
};