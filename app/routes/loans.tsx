import type { MetaFunction } from "@remix-run/node";
import { Link, Outlet, NavLink } from "@remix-run/react";
import Logo from "public/SimbukaLogo";
import Down from "public/Down";
import Back from "public/Back";
import Menu from "public/Menu";
import Account from "public/Account";
import Options from "public/Options";

export const meta: MetaFunction = () => {
  return [{ title: "Overview" }, { name: "description", content: "Overview" }];
};

export default function Index() {
  return (
    <main className="flex h-screen flex-col font-sans">
      <header className="flex items-center justify-between bg-simbuka px-6 py-3">
        <div className="text-md flex items-center gap-[25px] text-white">
          <div className="mr-2">
            <Logo />
          </div>
          <a href="./">Overview</a>
          <a className="flex items-center gap-2" href="./">
            Legal entities
            <div className="">
              <Down />
            </div>
          </a>
          <a href="./">Bank accounts</a>
          <a className="flex items-center gap-2" href="./">
            Payments
            <Down />
          </a>
          <a className="flex items-center gap-2" href="./">
            Loans
            <Down />
          </a>
          <a href="./">Products</a>
          <a href="./">Reports</a>
          <a className="flex items-center gap-2" href="./">
            Organization
            <Down />
          </a>
        </div>
        <div className="flex items-center gap-[22px]">
          <Menu className="cursor-pointer text-white" />
          <Account className="cursor-pointer fill-white" />
        </div>
      </header>
      <div className="flex h-[53px] items-center justify-between border-b-[1px] pl-6 pr-2">
        <div className="flex items-center gap-6">
          <Back className="h-6 cursor-pointer" />
          <p className="text-[19px] font-medium leading-loose text-gray-700">
            Loan &quot;U32LOV74C0G7&quot;
          </p>
          <p className="bg-greenbg text-greenhl flex items-center gap-2 rounded-full px-3 py-1 text-[14px] font-semibold">
            <span className="border-greenhl h-2 w-2 rounded-full border-4"></span>
            Contract active
          </p>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 p-1 shadow-inner">
          <Options className="h-4 fill-gray-500" />
        </div>
      </div>
      <section className="flex h-full">
        <nav className="flex h-full w-[276px] flex-col gap-[14px] border-r-[1px] p-3 text-sm font-[350] tracking-[0.01em]">
          <div className="flex flex-col gap-[2px]">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "rounded-md bg-gray-100 px-2 py-[5px] font-semibold hover:bg-gray-100"
                  : isPending
                    ? ""
                    : "rounded-md px-2 py-1 hover:bg-gray-200"
              }
              to={"./overview"}
            >
              Overview
            </NavLink>
            <Link className="rounded-md px-2 py-1" to={"./overview"}>
              Payments
            </Link>
            <Link className="rounded-md px-2 py-1" to={"./overview"}>
              Notifications
            </Link>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "rounded-md bg-gray-100 px-2 py-[5px] font-semibold hover:bg-gray-100"
                  : isPending
                    ? ""
                    : "rounded-md px-2 py-1 hover:bg-gray-200"
              }
              to={"./events"}
            >
              Events
            </NavLink>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="px-2 pt-1 text-[12px] font-[500] tracking-wider text-gray-400">
              LOAN PROCESS
            </p>
            <Link className="rounded-md px-2 py-1" to={"./overview"}>
              Application
            </Link>
            <Link className="rounded-md px-2 py-1" to={"./overview"}>
              Projected installments
            </Link>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "rounded-md bg-gray-100 px-2 py-[5px] font-semibold hover:bg-gray-100"
                  : isPending
                    ? ""
                    : "rounded-md px-2 py-1 hover:bg-gray-200"
              }
              to={"./evaluations"}
            >
              Evaluation
            </NavLink>
            <Link className="rounded-md px-2 py-1" to={"./overview"}>
              Application reviews
            </Link>
            <Link className="rounded-md px-2 py-1" to={"./overview"}>
              Contract activation
            </Link>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "rounded-md bg-gray-100 px-2 py-[5px] font-semibold hover:bg-gray-100"
                  : isPending
                    ? ""
                    : "rounded-md px-2 py-1 hover:bg-gray-200"
              }
              to={"./finalization"}
            >
              Contract finalization
            </NavLink>
          </div>
        </nav>
        <section className="bg-graybg flex w-screen flex-col gap-3 p-[14px]">
          <Outlet />
        </section>
      </section>
    </main>
  );
}
