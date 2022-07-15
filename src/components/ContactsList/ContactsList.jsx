import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/contacts/contacts-action';
import ContactsItem from '../ContactsItem/ContactsItem';
import PropTypes from 'prop-types';

const ContactsList = () => {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterContacts = () => {
    if (filter)
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );

    return contacts;
  };

  return (
    <ul>
      {filterContacts().map(({ name, number, id }) => {
        return (
          <ContactsItem
            name={name}
            number={number}
            key={id}
            id={id}
            removeContact={() => dispatch(removeContact(id))}
          />
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};

export default ContactsList;
