import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import ContactList from "./components/ContactList";
import ContactAdd from "./components/ContactAdd";
import SingleContact from "./components/SingleContact";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <ContactList />,
      },
      { path: "/add", element: <ContactAdd /> },
      { path: "/contact/:id", element: <SingleContact /> },
      {
        path: "/404",
        element: (
          <div>
            <p>Not found</p>
          </div>
        ),
      },
    ],
  },
]);

export default router;
