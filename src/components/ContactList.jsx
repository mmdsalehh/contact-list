import { useLoaderData } from "react-router-dom";
import { BiTrash, BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import ContactService from "../services/contactService";
import { useState } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState(useLoaderData());

  const handleContactDelete = async (id) => {
    await ContactService.deleteContact(id);
    setContacts((await ContactService.getContacts()).data);
  };

  if (!contacts.length) {
    return (
      <div className="p-4 text-center">
        <h1 className="text-3xl font-semibold">No Contact</h1>
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-2">
      {contacts.map((contact) => (
        <div
          className="flex justify-between border-t last:border-b"
          key={contact.id}
        >
          <div className="flex items-center">
            <BiUserCircle className="text-4xl" />
            <Link to={`/contact/${contact.id}`}>
              <div className="ml-2">
                <p className="selection:bg-white">{contact.name}</p>
                <p className="selection:bg-white">{contact.email}</p>
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <BiTrash
              className="text-xl text-red-500 hover:cursor-pointer active:scale-90"
              onClick={() => handleContactDelete(contact.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
