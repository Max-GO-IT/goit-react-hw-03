import { useState,useEffect } from "react";
import phoneContact from "../../json/phoneContact.json";
import ContactForm from "../ContactForm/ContacnForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from './App.module.css';


function App() {
  const [contacts, setContacts] = useState(() =>{
    const savedObject = window.localStorage.getItem("contacts");

    if (savedObject !== null) {
        return JSON.parse(savedObject);}
      return phoneContact;});

  const [filter, setFilter] = useState('');
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  
  const filterContacts =(evt)=> {
  //evt.preventDefault();
  setFilter (evt.target.value);
  //contacts.filter(filter);
  }
  const filteredContacts = filter?contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())) : contacts;


  // // // Функция для добавления контакта
   const addContact = (name, phone) => {
     setContacts(prevContacts => [
       ...prevContacts,
       { id: `id-${prevContacts.length + 1}`, name, number: phone }
     ]);
   };

  //  // Функция для удаления контакта
   const delContact = (id) => {
     setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
   };

  return (
    <>
    <h1>Phonebook</h1>
    <div>
    <ContactForm funAdd={addContact}/>
    </div>
    <SearchBox filter={filter} change={filterContacts} />
    <ContactList listConts={filteredContacts} delCell={delContact}/>
    </>
  );
}

export default App;
