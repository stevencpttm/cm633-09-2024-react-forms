import { Outlet, NavLink } from "react-router-dom";

function Root() {
  return (
    <div className="min-h-screen p-2 flex">
      <div className="max-w-5xl bg-slate-200 rounded-lg m-4 flex gap-x-4 overflow-hidden flex-1 mx-auto">
        <div className="w-1/3 p-2">
          <ul className="text-slate-600 flex flex-col gap-y-1 w-full text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return `${
                    isActive ? "bg-slate-300 font-bold" : ""
                  } block text-slate-600 rounded px-2 py-1`;
                }}
              >
                Getting Started
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/application"
                className={({ isActive }) => {
                  return `${
                    isActive ? "bg-slate-300 font-bold" : ""
                  } block text-slate-600 rounded px-2 py-1`;
                }}
              >
                Application
              </NavLink>
            </li>
            <li>
              <span className="block text-slate-600 hover:text-slate-800 rounded px-2 py-1">
                Review
              </span>
            </li>
          </ul>
        </div>

        <div className="w-2/3 py-3 pr-3 text-slate-900">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Root;
