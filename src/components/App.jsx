import React from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';
import { useEffect } from 'react';
import { selectIsLoading,selectError } from './redux/selectors';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { fetchContacts } from './redux/operations';

export const App = () => {
  
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError)

  const dispatch = useDispatch();

  useEffect(()=> {dispatch(fetchContacts());}, [dispatch])



  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      <h2> Contacts </h2>
      <Filter />
      {isLoading && !error && <Loader/>}
      <ContactList
      />
    </div>
  );
};
