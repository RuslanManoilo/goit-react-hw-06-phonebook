import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Container, SecondTitle, Title } from "./GlobalStyle";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <ToastContainer />

      <SecondTitle>Contacts</SecondTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};