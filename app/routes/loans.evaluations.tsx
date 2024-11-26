import OpenPage from "public/OpenPage";
import {
  FaCheckCircle,
  FaSearch,
  FaSort,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
export default function Evalaution() {
  return (
    <>
      <div className="rounded-md border-[1px] bg-white text-sm font-[500] tracking-wide shadow-md">
        <h2 className="border-b-[1px] p-3 text-lg font-[400]">Evaluation</h2>
        <ul className="tracking-wide">
          <div className="flex border-b-[1px] p-3">
            <li className="flex-[1.2]">Status</li>
            <li className="flex flex-[3] items-center gap-2 text-green-700">
              <FaCheckCircle />
              Accepted
            </li>
          </div>
          <div className="flex border-b-[1px] p-3">
            <li className="flex-[1.2]">Credit score</li>
            <li className="flex flex-[3] items-center">897</li>
          </div>
          <div className="flex border-b-[1px] p-3">
            <li className="flex-[1.2]">Risk level</li>
            <li className="flex flex-[3] items-center gap-2 text-blue-600">
              A1 (Very Low Risk)
              <OpenPage />
            </li>
          </div>
          <div className="flex border-b-[1px] p-3">
            <li className="flex-[1.2]">Loan limit</li>
            <li className="flex flex-[3] items-center gap-2 text-blue-600">
              40,000,000.00 TZS
              <OpenPage />
            </li>
          </div>
        </ul>
      </div>
      <section className="rounded-md border-[1px] bg-white text-sm shadow-md">
        <div className="border-b-[1px] p-3">
          <h2 className="text-lg font-[400]">Policy Requirements</h2>
        </div>
        <div className="flex items-center justify-between">
          <div className="relative p-3 text-xs">
            <FaSearch className="absolute left-[18px] top-[18px] h-3 w-3 fill-gray-500" />
            <input
              type="text"
              placeholder="Search policy requirements..."
              className="w-[250px] rounded-md border-[1px] px-6 py-1 text-gray-400"
            />
          </div>
          <button className="mr-3 flex h-[30px] w-[100px] items-center justify-center gap-3 rounded-md border-[1px] font-semibold text-gray-500 shadow-md">
            <GoGear className="h-4 w-4" />
            Options
          </button>
        </div>
        <div className="flex">
          <div className="bg-graybg flex flex-[8] items-center justify-between border-y-[1px] border-b-[1px] p-3">
            <h2 className="text-md text-gray-500">Policy Requirements</h2>
            <FaSort className="fill-gray-500" />
          </div>
          <div className="flex flex-[1.5] items-center justify-between border-[1px] border-b-[1px] bg-gray-100 p-3">
            <h2 className="text-md font-bold text-gray-500">Decision</h2>
            <FaSort className="fill-gray-500" />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-[8] items-center justify-between border-b-[1px] border-r-[1px] bg-white p-3">
            <p className="">Customer must be 18 or more years old</p>
          </div>
          <div className="flex flex-[1.5] items-center justify-between border-b-[1px] bg-white p-3">
            <p className="rounded-md border-[1px] border-gray-300 bg-green-200 px-2 py-0.5 font-bold text-green-600">
              Passed
            </p>
            <IoEyeOutline />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-[8] items-center justify-between border-b-[1px] border-r-[1px] bg-white p-3">
            <p className="">
              Customer must be 54 or less years old at loan maturity date
            </p>
          </div>
          <div className="flex flex-[1.5] items-center justify-between border-b-[1px] bg-white p-3">
            <p className="rounded-md border-[1px] border-gray-300 bg-green-200 px-2 py-0.5 font-bold text-green-600">
              Passed
            </p>
            <IoEyeOutline />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-[8] items-center justify-between border-b-[1px] border-r-[1px] bg-white p-3">
            <p className="">
              Customer must be emplyed for a minimum of three months with their
              current employer
            </p>
          </div>
          <div className="flex flex-[1.5] items-center justify-between border-b-[1px] bg-white p-3">
            <p className="rounded-md border-[1px] border-gray-300 bg-green-200 px-2 py-0.5 font-bold text-green-600">
              Passed
            </p>
            <IoEyeOutline />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-[8] items-center justify-between border-b-[1px] border-r-[1px] bg-white p-3">
            <p className="">Customer must have a clean Creditinfo report</p>
          </div>
          <div className="flex flex-[1.5] items-center justify-between border-b-[1px] bg-white p-3">
            <p className="rounded-md border-[1px] border-gray-300 bg-green-200 px-2 py-0.5 font-bold text-green-600">
              Passed
            </p>
            <IoEyeOutline />
          </div>
        </div>
        <div className="bg-graybg flex items-center justify-between rounded-b-md border-t-[1px] p-3 font-[350]">
          <p className="text-[12px]">
            Showing 1 - 4 (4 results were found in total)
          </p>
          <div className="flex gap-3">
            <button className="flex items-center justify-center gap-2 rounded-md border-[1px] bg-gray-50 px-3 py-1 font-bold text-gray-400">
              <FaAngleLeft className="h-4 w-4" />
              Previous
            </button>
            <button className="flex items-center justify-center gap-2 rounded-md border-[1px] bg-gray-50 px-3 py-1 font-bold text-gray-400">
              Next
              <FaAngleRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
