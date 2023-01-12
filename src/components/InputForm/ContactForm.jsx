import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import css from 'components/InputForm/inputForm.module.css'


export default function ContactForm({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget
        switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  }
  const handleSubmit = event => {
    event.preventDefault();
    const state = {name,number}
    onSubmit(state,resetForm)
  }
  const resetForm = () => {
    setName('');
    setNumber('')
  }
      return (
      <form onSubmit={handleSubmit} className={css.inputForm}>
        <label className={css.inputLabel}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={css.inputLabel}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button>Add contact</Button>
      </form>
    );
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}