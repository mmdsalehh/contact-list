import { NavLink } from "react-router-dom";

const links = [
  { to: "", name: "Home" },
  { to: "/add", name: "Add" },
];

const Header = () => {
  return (
    <header className="border bg-gray-100 p-4">
      <h1 className="text-center text-2xl">Contact Manager</h1>
      <section className="mt-4 grid grid-cols-2 gap-1">
        {links.map((link) => (
          <NavLink
            to={link.to}
            className={({ isActive }) => {
              return `rounded-md bg-slate-800 font-semibold text-white ${
                isActive && "text-green-500"
              }`;
            }}
            key={link.to}
          >
            <h1 className="text-center text-2xl">{link.name}</h1>
          </NavLink>
        ))}
      </section>
    </header>
  );
};

export default Header;
