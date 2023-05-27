import { BiTrash, BiUserCircle } from "react-icons/bi";

const ContactList = ({ contacts, handleContactDelete }) => {
  if (!contacts.length) return null;

  return (
    <div className="mt-4 space-y-2">
      {contacts.map((contact) => (
        <div
          className="flex justify-between border-t last:border-b"
          key={contact.id}
        >
          <div className="flex items-center">
            <BiUserCircle className="text-4xl" />
            <div className="ml-2">
              <p className="selection:bg-white">{contact.name}</p>
              <p className="selection:bg-white">{contact.email}</p>
            </div>
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
