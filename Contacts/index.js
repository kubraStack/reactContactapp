import {useState, useEffect} from 'react';
import {} from './style.css'
import List from './List';
import Form from './Form';


function Contacts() {

  //*Formda girilen bilgileri bir dizide saklamak istediğimiz için useState oluşturduk
  const[contacts, setContacts] = useState([
    {
      fullname: 'Mehmet',
      phone_number: "123456"
    },
    {
      fullname: 'Ayşe',
      phone_number: "678910"
    },
    {
      fullname: 'Nazlı',
      phone_number: "987654"
    }
  ]);
  
  //Girilen bilgiler işlendikten sonra contacts içindeki bilgileri yakalamak için useEffect kullandık
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id='container'>
      <h1>Contact List App</h1>
      <List contacts={contacts}></List>
      <Form addContact={setContacts} contacts={contacts}></Form>
    </div>
  )
}

export default Contacts;

// addContact prop'u ile setContact state'ini kullanmış olduk. Contacts prop'u ilede contacts bilgisini form'a verdik
