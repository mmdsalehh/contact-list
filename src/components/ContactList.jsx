import { useEffect } from "react";
import { BiTrash, BiUserCircle } from "react-icons/bi";
import { useContacts, useContactsDispatcher } from "../context/ContactProvider";
import { Link } from "react-router-dom";

const ContactList = () => {
  const contacts = useContacts();
  const dispatch = useContactsDispatcher();

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
