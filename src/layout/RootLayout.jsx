import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="px-48">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
