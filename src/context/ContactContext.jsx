import { createContext, useReducer, useContext } from "react";
import PropTypes from "prop-types";

const ContactContext = createContext();
const ContactContextDispatcher = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "addMany": {
      return [...action.data, ...state];
    }

    case "addOne": {
      return [
        { ...action.data, id: Math.ceil(Math.random() * 10000) },
        ...state,
      ];
    }

    case "remove": {
      return state.filter((contact) => contact.id !== action.id);
    }

    default:
      return state;
  }
};

const ContactProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(reducer, []);

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
