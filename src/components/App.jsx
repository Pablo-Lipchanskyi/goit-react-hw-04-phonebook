import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/InputForm/ContactForm';
import { Section } from 'components/Section/Section';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import css from 'components/app.module.css'

export default function App() {
  const isInitRef = useRef(true);
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    isInitRef.current = false;
  }, []);

  useEffect(() => {
    !isInitRef.current &&
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }, resetForm) => {
    const newContact = { id: nanoid(5), name, number };

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      setContacts(contacts => [...contacts, newContact]);
      resetForm();
    }
  };

  const filterChange = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts?.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts => contacts.filter(({ id }) => id !== contactId));
  };
  return (
    <div className={css.div}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <Section title="Contacts">
          <Filter filter={filter} onChange={filterChange} />
          <ContactsList
            contacts={getVisibleContacts()}
            onDeleteButton={deleteContact}
          ></ContactsList>
        </Section>
      </div>
  )
}
