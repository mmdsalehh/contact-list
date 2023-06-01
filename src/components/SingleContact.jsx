import { useNavigate, useParams } from "react-router-dom";
import { useContacts, useContactsDispatcher } from "../context/ContactProvider";
import { BiUserCircle, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";

const SingleContact = () => {
  const params = useParams();
  const id = parseInt(params.id);
  const contact = useContacts().find((contact) => contact.id === id);

  const navigate = useNavigate();
  const dispatch = useContactsDispatcher();

  const handleContactDelete = () => {
    dispatch({ type: "remove", id: contact.id });
    navigate("/");
  };

  if (!contact) {
    navigate("/404");
    return;
  }

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
