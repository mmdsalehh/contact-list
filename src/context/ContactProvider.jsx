import { createContext, useReducer, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const ContactContext = createContext();
const ContactContextDispatcher = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "addMany": {
      return [...action.data];
    }

    case "addOne": {
      return [
        { ...action.data, id: Math.ceil(Math.random() * 10000) },
        ...state,
      ];
    }

    case "remove": {
      localStorage.setItem(
        "contacts",
        JSON.stringify(
          JSON.parse(localStorage.getItem("contacts")).filter(
            (contact) => contact.id !== action.id
          )
        )
      );
      return state.filter((contact) => contact.id !== action.id);
    }

    default:
      return state;
  }
};

const ContactProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contacts"));
    if (data && data.length) dispatch({ type: "addMany", data });
  }, []);

  return (
    <ContactContext.Provider value={contacts}>
      <ContactContextDispatcher.Provider value={dispatch}>
        {children}
      </ContactContextDispatcher.Provider>
    </ContactContext.Provider>
  );
};

ContactProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const useContacts = () => useContext(ContactContext);
const useContactsDispatcher = () => useContext(ContactContextDispatcher);

export { useContacts, useContactsDispatcher };

export default ContactProvider;
