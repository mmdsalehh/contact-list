import { createBrowserRouter, redirect } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import ContactList from "./components/ContactList";
import ContactAdd from "./components/ContactAdd";
import SingleContact from "./components/SingleContact";
import ContactService from "./services/contactService";
import { isAxiosError } from "axios";
import ContactEdit from "./components/ContactEdit";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <ContactList />,
        loader: async () => (await ContactService.getContacts()).data,
      },
      { path: "/add", element: <ContactAdd /> },
      {
        path: "/contact/:id",
        element: <SingleContact />,
        loader: async ({ params }) => {
          try {
            const response = await ContactService.getContact(params.id);
            return response.data;
          } catch (err) {
            if (!isAxiosError(err)) return redirect("/404");
            if (err.response.status === 404) return redirect("/404");
          }
        },
      },
      {
        path: "/edit/:id",
        element: <ContactEdit />,
        loader: async ({ params }) => {
          try {
            const response = await ContactService.getContact(params.id);
            return response.data;
          } catch (err) {
            if (!isAxiosError(err)) return redirect("/404");
            if (err.response.status === 404) return redirect("/404");
          }
        },
      },
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
