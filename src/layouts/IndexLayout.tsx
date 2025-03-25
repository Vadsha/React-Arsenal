import { Button } from "@/components/ui/button";
import {
  Cherry,
  Menu,
  FileCheck,
  Home,
  BetweenHorizontalEnd,
  Webhook
} from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router";

const IndexLayout = () => {
  const [navigations] = useState([
    { name: "Home", path: "/", icon: <Home size={18} /> },
    {
      name: "React Hook Form Zod",
      path: "/react-hook-form-zod",
      icon: <FileCheck size={18} />
    },
    {
      name: "Redux Toolkit",
      path: "/redux-toolkit",
      icon: <BetweenHorizontalEnd size={18} />
    },
    {
      name: "Axios Instance",
      path: "/axios-instance",
      icon: <Webhook size={18} />
    }
  ]);

  return (
    <div className="lg:grid grid-cols-6 gap-2 pr-2">
      <aside className="hidden lg:block min-h-screen shadow bg-secondary/50">
        <h1 className="p-2 text-xl font-black">React Docs</h1>
        <ul className="py-4 space-y-2">
          {navigations.map(({ name, path, icon }) => (
            <li
              key={name}
              className="border-b flex gap-2 items-center p-2 text-slate-800 hover:text-primary transition-all duration-300"
            >
              {icon}
              <Link
                className="text-slate-800 hover:text-primary transition-all duration-300"
                to={path}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="col-span-5">
        <nav className="p-1 flex justify-between shadow my-4 rounded bg-secondary/50">
          <Button
            variant="secondary"
            size="icon"
            className="cursor-pointer lg:hidden"
          >
            <Menu size={32} />
          </Button>
          <Button variant="secondary" size="icon">
            <Cherry size={32} />
          </Button>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default IndexLayout;
