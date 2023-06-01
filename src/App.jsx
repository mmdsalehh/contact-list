import ContactApp from "./components/ContactApp";
import ContactProvider from "./context/ContactContext";

function App() {
  return (
    <ContactProvider>
      <ContactApp />
    </ContactProvider>
  );
}

export default App;
