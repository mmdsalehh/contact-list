import { useEffect } from "react";

import Header from "./Header";
import ContactAdd from "./ContactAdd";
import ContactList from "./ContactList";
import { useContacts, useContactsDispatcher } from "../context/ContactContext";

const ContactApp = () => {
  const contacts = useContacts();
  const dispatch = useContactsDispatcher();

  const handleContactAdd = (contact) => {
    dispatch({ type: "addOne", data: contact });
  };

  const handleContactDelete = (id) => {
    dispatch({ type: "remove", id });
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contacts"));
    if (data && data.length) dispatch({ type: "addMany", data });
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
