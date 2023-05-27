import { useEffect, useState } from "react";

import Header from "./Header";
import ContactAdd from "./ContactAdd";
import ContactList from "./ContactList";

const generateId = () => Math.ceil(Math.random() * 10000);

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);

  const handleContactAdd = (contact) => {
    setContacts((prevState) => [
      ...prevState,
      { ...contact, id: generateId() },
    ]);
  };

  const handleContactDelete = (id) => {
    const new_contacts = contacts.filter((contact) => contact.id !== id);
    setContacts(new_contacts);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contacts"));
    if (data && data.length) {
      console.log("here", data);
      setContacts(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Header />
      <div className="px-48">
        <ContactAdd handleContactAdd={handleContactAdd} />
        <ContactList
          contacts={contacts}
          handleContactDelete={handleContactDelete}
        />
      </div>
    </>
  );
};

export default ContactApp;
