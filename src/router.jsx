import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import ContactList from "./components/ContactList";
import ContactAdd from "./components/ContactAdd";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <ContactList />,
      },
      { path: "/add", element: <ContactAdd /> },
    ],
  },
]);

export default router;
