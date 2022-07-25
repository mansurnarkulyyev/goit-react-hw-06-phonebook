import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-action';
import { generate } from 'shortid';



export function FormNewContact({ initialState }) {
  const [state, setState] = useState({ ...initialState });
  const { name, number } = state;
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === "checkbox" ? checked : value;
    setState(prevState => ({
      ...prevState,
      [name]: newValue
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number, id: generate() }));
    reset()
  };
  const reset = () => {
    setState({
      name: '',
      number: '',
    })
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Phone
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
  // }
}


export default FormNewContact;
