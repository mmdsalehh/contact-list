import { useLoaderData, useNavigate } from "react-router-dom";
import { BiUserCircle, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import ContactService from "../services/contactService";

const SingleContact = () => {
  const contact = useLoaderData();
  const navigate = useNavigate();

  const handleContactDelete = async () => {
    await ContactService.deleteContact(contact.id);
    navigate("/");
  };

  return (
    <div
      className="mt-4 flex justify-between rounded-md border border-slate-600 p-1.5"
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
          onClick={handleContactDelete}
        />
      </div>
    </div>
  );
};

export default SingleContact;
