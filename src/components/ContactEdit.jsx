import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Input from "../common/Input";
import ContactService from "../services/contactService";

const ContactEdit = () => {
  const contact = useLoaderData();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: contact.name,
    email: contact.email,
  });

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    if (!formValues.name || !formValues.email) {
      alert("Complete the information");
      return;
    }

    await ContactService.editContact(contact.id, formValues);
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form className="pt-2" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold">Edit Contact</h2>
      <div className="mt-4">
        <Input
          title="Name"
          name="name"
          type="text"
          placeholder="Name"
          value={formValues.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mt-2">
        <Input
          title="Email"
          name="email"
          type="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="mt-2 flex justify-between">
        <button
          className="rounded bg-green-600 px-4 py-1 font-semibold text-white active:scale-95"
          type="submit"
        >
          Edit
        </button>
        <button
          className="rounded px-4 py-1 font-semibold text-red-400 ring-1 ring-red-400 active:scale-95"
          type="button"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ContactEdit;
