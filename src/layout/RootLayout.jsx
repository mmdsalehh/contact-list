import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="px-2 lg:px-48">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
