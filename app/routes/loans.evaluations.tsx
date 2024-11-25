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
      <div className=" bg-white border-[1px] rounded-md shadow-md text-sm">
        <h2 className="text-2xl border-b-[1px] p-3">Evaluation</h2>
        <ul className="">
          <div className="flex border-b-[1px] p-3">
            <li className="flex-[1]">Status</li>
            <li className="flex flex-[2] items-center text-green-700 gap-2">
              <FaCheckCircle />
              Accepted
            </li>
          </div>
          <div className="flex border-b-[1px] p-3">
            <li className="flex-[1]">Credit score</li>
            <li className="flex flex-[2] items-center">897</li>
          </div>
          <div className="flex border-b-[1px] p-3">
            <li className="flex-[1]">Risk level</li>
            <li className="flex flex-[2] items-center text-blue-600 gap-2">
              A1 (Very Low Risk)
              <OpenPage />
            </li>
          </div>
          <div className="flex border-b-[1px] p-3">
            <li className="flex-[1]">Loan Limit</li>
            <li className="flex flex-[2] items-center text-blue-600 gap-2">
              40,000,000.00 TZS
              <OpenPage />
            </li>
          </div>
        </ul>
      </div>
      <section className=" bg-white border-[1px] rounded-md shadow-md text-sm">
        <div className="p-3 border-b-[1px]">
          <h2 className="text-xl">Policy Requirements</h2>
        </div>
        <div className="flex justify-between items-center">
          <div className="p-3 relative text-xs">
            <FaSearch className="absolute top-[18px] left-[18px] h-3 w-3 fill-gray-500" />
            <input
              type="text"
              placeholder="Search policy requirements..."
              className="px-6 w-[250px] py-1 border-[1px] rounded-md text-gray-400"
            />
          </div>
          <button className="flex items-center justify-center gap-3 border-[1px] shadow-md text-gray-500 font-semibold h-[30px] w-[100px] mr-3 rounded-md">
            <GoGear className="h-4 w-4" />
            Options
          </button>
        </div>
        <div className="flex">
          <div className="flex-[8] border-y-[1px] p-3 border-b-[1px] bg-gray-100 flex justify-between items-center">
            <h2 className="text-md font-bold text-gray-500 ">
              Policy Requirements
            </h2>
            <FaSort className="fill-gray-500" />
          </div>
          <div className="flex-[1.5] border-[1px] p-3 border-b-[1px] bg-gray-100 flex justify-between items-center">
            <h2 className="text-md font-bold text-gray-500 ">Decision</h2>
            <FaSort className="fill-gray-500" />
          </div>
        </div>
        <div className="flex">
          <div className="flex-[8] border-r-[1px]  border-b-[1px] p-3  bg-white flex justify-between items-center">
            <p className="">Customer must be 18 or more years old</p>
          </div>
          <div className="flex-[1.5]  p-3 border-b-[1px] bg-white flex justify-between items-center">
            <p className="bg-green-200 font-bold text-green-600 border-[1px] border-gray-300 rounded-md px-2 py-0.5">
              Passed
            </p>
            <IoEyeOutline />
          </div>
        </div>
        <div className="flex">
          <div className="flex-[8] border-r-[1px]  p-3 border-b-[1px] bg-white flex justify-between items-center">
            <p className="">
              Customer must be 54 or less years old at loan maturity date
            </p>
          </div>
          <div className="flex-[1.5] p-3 border-b-[1px] bg-white flex justify-between items-center">
            <p className="bg-green-200 font-bold text-green-600 border-[1px] border-gray-300 rounded-md px-2 py-0.5">
              Passed
            </p>
            <IoEyeOutline />
          </div>
        </div>
        <div className="flex">
          <div className="flex-[8] border-r-[1px]  p-3 border-b-[1px] bg-white flex justify-between items-center">
            <p className="">
              Customer must be emplyed for a minimum of three months with their
              current employer
            </p>
          </div>
          <div className="flex-[1.5] p-3 border-b-[1px] bg-white flex justify-between items-center">
            <p className="bg-green-200 font-bold text-green-600 border-[1px] border-gray-300 rounded-md px-2 py-0.5">
              Passed
            </p>
            <IoEyeOutline />
          </div>
        </div>
        <div className="flex">
          <div className="flex-[8] border-r-[1px]  p-3 border-b-[1px] bg-white flex justify-between items-center">
            <p className="">Customer must have a clean Creditinfo report</p>
          </div>
          <div className="flex-[1.5] p-3 border-b-[1px] bg-white flex justify-between items-center">
            <p className="bg-green-200 font-bold text-green-600 border-[1px] border-gray-300 rounded-md px-2 py-0.5">
              Passed
            </p>
            <IoEyeOutline />
          </div>
        </div>
        <div className="flex p-3 bg-gray-100 justify-between items-center rounded-b-md">
          <p className="text-[12px]">
            Showing 1 - 4 (4 results were found in total)
          </p>
          <div className="flex gap-3">
            <button className="border-[1px] justify-center flex items-center gap-2 px-3 py-1 rounded-md bg-gray-50 text-gray-400 font-bold">
              <FaAngleLeft className="h-4 w-4" />
              Previous
            </button>
            <button className="border-[1px] justify-center flex items-center gap-2 px-3 py-1 rounded-md bg-gray-50 text-gray-400 font-bold">
              Next
              <FaAngleRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
