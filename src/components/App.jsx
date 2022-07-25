
import FormNewContact from './FormNewContact/FormNewContact';
import Section from './Section/Section';
import ContactsList from './ContactsList/ContactsList';
import Notification from './Notification/Notification';
import SearchContact from './SearchContact/SearchContact';

import '../styles/styles.scss';
import { useSelector } from 'react-redux';


function App() {
  const contacts = useSelector(state => state.contacts);



  return (
    <>
      <Section title={'Phonebook'}>
        <FormNewContact />
      </Section>
      <Section title={'Contacts'}>
        {contacts.length ? (
          <>
            <SearchContact
            />
            <ContactsList
            />
          </>
        ) : (
          <Notification message={'Phonebook is empty, add someone'} />
        )}
      </Section>
    </>
  );
  // }
};

export default App;