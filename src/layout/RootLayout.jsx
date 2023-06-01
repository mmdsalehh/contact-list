import { Outlet } from "react-router-dom";
import ContactProvider from "../context/ContactProvider";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <ContactProvider>
      <>
        <Header />
        <div className="px-48">
          <Outlet />
        </div>
      </>
    </ContactProvider>
  );
};

export default RootLayout;
