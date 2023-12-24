import {
  PresentationChartBarIcon,
  UsersIcon,
  Bars3BottomLeftIcon,
  DocumentTextIcon
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { List, ListItem, ListItemPrefix } from "@material-tailwind/react";

export function DefaultSidebar() {
  const [open, setOpen] = useState(true);

  const NavLink = [
    {
      link: "Dashboard",
      path: "/",
      icon: <PresentationChartBarIcon className="w-5 h-5" />,
    },
    { link: "User", path: "/user", icon: <UsersIcon className="w-5 h-5" /> },
    { link: "Form", path: "/form", icon: <DocumentTextIcon className="w-5 h-5"/> },
    { link: "Rekapan", path: "/rekapan" },
    { link: "Mapping", path: "/mapping" },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex fixed right-1 z-50 items-center p-2 mt-2 ms-3 text-sm text-gray-900 rounded-lg sm:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3BottomLeftIcon className="w-6 h-6" />
      </button>

      <aside
        className={
          open
            ? "fixed top-0 left-0 z-40 shadow-lg rounded-lg h-screen transition-transform translate-x-0"
            : "fixed top-0 left-0 z-40 shadow-lg rounded-lg w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        }
      >
        <div className="h-full px-1 py-4 rounded-lg overflow-y-auto bg-gray-50">
          {NavLink.map((items, index) => (
            <Link
              to={items.path}
              key={index}
              className="flex items-center text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <List>
                <ListItem>
                  <ListItemPrefix>{items.icon}</ListItemPrefix>
                  <span>{items.link}</span>
                </ListItem>
              </List>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
