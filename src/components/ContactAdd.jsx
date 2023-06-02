import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../common/Input";
import ContactService from "../services/contactService";

const ContactAdd = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValues.name || !formValues.email) {
      alert("Complete the information");
      return;
    }

    await ContactService.addContact(formValues);

    navigate("/");
    setFormValues({
      name: "",
      email: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form className="pt-2" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold">Add Contact</h2>
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
      <div className="mt-2">
        <button
          className="rounded bg-blue-600 px-4 py-1 font-semibold text-white active:scale-95"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default ContactAdd;
