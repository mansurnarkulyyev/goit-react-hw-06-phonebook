// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import FormNewContact from './FormNewContact/FormNewContact';
import Section from './Section/Section';
import ContactsList from './ContactsList/ContactsList';
import Notification from './Notification/Notification';
import SearchContact from './SearchContact/SearchContact';

import '../styles/styles.scss';
import { useSelector } from 'react-redux';


export function App() {
  const contacts = useSelector(state => state.contacts);

  // export function App() {
  //   const [contacts, setContacts] = useState([
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ]);
  //   const [filter, setFilter] = useState('');


  //   useEffect(() => {
  //     const contactsStorage = localStorage.getItem('contacts');
  //     const parsedContacts = JSON.parse(contactsStorage);

  //     if (parsedContacts) {
  //       setContacts(parsedContacts);
  //     } else {
  //       return;
  //     }
  //   }, []);

  //   useEffect(() => {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }, [contacts]);


  //   const filterContacts = () => {
  //     if (filter) {
  //       return contacts.filter(contact =>
  //         contact.name.toLowerCase().includes(filter.toLowerCase())
  //       );

  //     }
  //     return contacts;
  //   }

  //   const addContact = ({ name, number }) => {
  //     const normalizedFind = name.toLowerCase();
  //     const findName = contacts.find(
  //       contact => contact.name.toLowerCase() === normalizedFind
  //     );
  //     if (findName) {
  //       return alert(`${name} is already in contacts.`);
  //     }

  //     const findNumber = contacts.find(
  //       contact => contact.number === number
  //     );
  //     if (findNumber) {
  //       return alert(`This phone number is already in use.`);
  //     }


  //     const newContact = {
  //       id: nanoid(),
  //       name,
  //       number,
  //     };

  //     setContacts(contacts => [...contacts, newContact]);
  //   };


  //   const removeContact = id => {

  //     setContacts(prev => prev.filter(contact => contact.id !== id));
  //   };

  //   const handleChange = e => {
  //     setFilter(e.target.value);
  //   };


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
}