import { useSelector } from 'react-redux';
import React from 'react';
import css from './ContactList.module.css';
import { getContacts  } from 'redux/contacts/selectors';
import { getFilterContact } from 'redux/contacts/selectors';
import { List } from './List';


const ContactList = () => {
  
  const contacts = useSelector(getContacts);
  
  const FilterCont = useSelector(getFilterContact);

  const filterList = contacts.filter(({ name }) =>
    name.toLowerCase().includes(FilterCont)
  );
  return (
    <>
      <h2 className={css.contacts_h}>Contacts</h2>
      <ul className={css.filter_list}>
        {filterList.map(contact => {
          return <List key={contact.id} contact={contact} />;
        })}
      </ul>
    </>
  );
};

export default ContactList;
