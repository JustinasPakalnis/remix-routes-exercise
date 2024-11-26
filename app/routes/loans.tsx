import type { MetaFunction } from "@remix-run/node";
import { Link, Outlet, NavLink } from "@remix-run/react";
import Logo from "public/SimbukaLogo";
import Down from "public/Down";
import Back from "public/Back";
import Menu from "public/Menu";
import Account from "public/Account";
import Options from "public/Options";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="flex flex-col h-screen">
      <header className="bg-simbuka flex py-1 items-center px-6 justify-between">
        <div className="text-white flex items-center gap-[27px] text-md">
          <Logo />
          <a href="./">Overview</a>
          <a className="flex items-center gap-1" href="./">
            Legal entities
            <Down />
          </a>
          <a href="./">Bank accounts</a>
          <a className="flex items-center gap-1" href="./">
            Payments
            <Down />
          </a>
          <a className="flex items-center gap-1" href="./">
            Loans
            <Down />
          </a>
          <a href="./">Products</a>
          <a href="./">Reports</a>
          <a className="flex items-center gap-1" href="./">
            Organization
            <Down />
          </a>
        </div>
        <div className="flex items-center gap-3 ">
          <Menu className=" text-white cursor-pointer" />
          <Account className=" fill-white cursor-pointer" />
        </div>
      </header>
      <div className="flex items-center h-12 px-5 justify-between border-b-[1px]">
        <div className="flex items-center gap-3">
          <Back className="h-6" />
          <p className="text-[18px]  font-semibold text-gray-700">
            Loan &quot;U32LOV74C0G7&quot;
          </p>
          <p className="bg-green-100 text-[14px] font-semibold rounded-md p-0.5 text-green-600 flex items-center gap-2 px-2">
            <span className="border-4 border-green-600 rounded-full h-2 w-2"></span>
            Contract active
          </p>
        </div>
        <div className="border-[1px] p-1 cursor-pointer rounded-md">
          <Options className="h-3" />
        </div>
      </div>
      <section className="flex h-full">
        <nav className="flex flex-col p-3 border-r-[1px] w-[280px] gap-5 h-full text-sm tracking-wide">
          <div className="flex flex-col ">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "bg-gray-100 rounded-md px-2 py-1 font-bold hover:bg-gray-100 hover:font-bold"
                  : isPending
                  ? ""
                  : "px-2 py-1 rounded-md hover:bg-gray-200 hover:font-bold"
              }
              to={"./overview"}
            >
              Overview
            </NavLink>
            <Link
              className="px-2 py-1 rounded-md hover:bg-gray-200 hover:font-bold"
              to={"./overview"}
            >
              Payments
            </Link>
            <Link
              className="px-2 py-1 rounded-md hover:bg-gray-200 hover:font-bold"
              to={"./overview"}
            >
              Notifications
            </Link>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "bg-gray-100 rounded-md px-2 py-1 font-bold hover:bg-gray-100 hover:font-bold"
                  : isPending
                  ? ""
                  : "px-2 py-1 rounded-md hover:bg-gray-200 hover:font-bold"
              }
              to={"./events"}
            >
              Events
            </NavLink>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-400 px-2 py-1 text-[12px] font-semibold">
              LOAN PROCESS
            </p>
            <Link
              className="px-2 py-1 rounded-md hover:bg-gray-200 hover:font-bold"
              to={"./overview"}
            >
              Application
            </Link>
            <Link
              className="px-2 py-1 rounded-md hover:bg-gray-200 hover:font-bold"
              to={"./overview"}
            >
              Projected installments
            </Link>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "bg-gray-100 rounded-md px-2 py-1 font-bold hover:bg-gray-100 hover:font-bold"
                  : isPending
                  ? ""
                  : "px-2 py-1 rounded-md hover:bg-gray-200 hover:font-bold"
              }
              to={"./evaluations"}
            >
              Evaluations
            </NavLink>
            <Link
              className="px-2 py-1 rounded-md hover:bg-gray-200 hover:font-bold"
              to={"./overview"}
            >
              Application reviews
            </Link>
            <Link
              className="px-2 py-1 rounded-md hover:bg-gray-200 hover:font-bold"
              to={"./overview"}
            >
              Contract activation
            </Link>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "bg-gray-100 rounded-md px-2 py-1 font-bold hover:bg-gray-100 hover:font-bold"
                  : isPending
                  ? ""
                  : "px-2 py-1 rounded-md hover:bg-gray-200 hover:font-bold"
              }
              to={"./finalization"}
            >
              Contract finalization
            </NavLink>
          </div>
        </nav>
        <section className="flex flex-col gap-3 p-3 w-screen bg-gray-100 ">
          <Outlet />
        </section>
      </section>
    </main>
  );
}
