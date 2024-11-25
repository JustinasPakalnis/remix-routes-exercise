import {
  FaSearch,
  FaSort,
  FaCheckCircle,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { Outlet } from "@remix-run/react";
export default function Events() {
  return (
    <div className="flex flex-col text-xs border rounded-md bg-white shadow-md">
      <h2 className="text-xl border-b-[1px] p-3">Events</h2>
      <div className="flex justify-between items-center">
        <div className="p-3 relative">
          <FaSearch className="absolute top-[18px] left-[18px] h-3 w-3 fill-gray-500" />
          <input
            type="text"
            defaultValue="Search events..."
            className="px-6 py-1 border-[1px] rounded-md text-gray-400"
          />
        </div>
        <button className="flex items-center justify-center gap-3 border-[1px] shadow-md text-gray-500 font-semibold h-[30px] w-[100px] mr-3 rounded-md">
          <GoGear className="h-4 w-4" />
          Options
        </button>
      </div>
      <div className="flex">
        <div className="flex-[1.3] border-[1px]">
          <p className="bg-gray-100 p-3 font-semibold text-gray-600 flex justify-between">
            Timestamp
            <FaSort className="fill-gray-400" />
          </p>
          <ul className="">
            <li
              className="p-3 border-y-[1px]"
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              }}
            >
              2024-11-22 15:22:48.852
            </li>
            <li
              className="p-3 border-y-[1px]"
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              }}
            >
              2024-11-22 15:22:48.811
            </li>
            <li
              className="p-3 border-y-[1px]"
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              }}
            >
              2024-11-22 15:21:19.166
            </li>
            <li
              className="p-3 border-y-[1px]"
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              }}
            >
              2024-11-22 15:21:19.154
            </li>
            <li
              className="p-3 border-y-[1px]"
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              }}
            >
              2024-11-22 15:21:01.582
            </li>
            <li
              className="p-3 border-y-[1px]"
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              }}
            >
              2024-11-22 15:21:01.565
            </li>
            <li
              className="p-3 border-y-[1px]"
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              }}
            >
              2024-11-22 15:21:01.538
            </li>
            <li
              className="p-3 border-y-[1px]"
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              }}
            >
              2024-11-22 15:20:49.913
            </li>
            <li
              className="p-3 border-y-[1px]"
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              }}
            >
              2024-11-22 15:20:49.905
            </li>
            <li
              className="p-3 border-y-[1px]"
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              }}
            >
              2024-11-22 15:20:48.874
            </li>
          </ul>
        </div>
        <div className="flex-[4] border-[1px]">
          <p className="bg-gray-100 p-3 font-semibold text-gray-600">Causer</p>
          <ul>
            <li className="p-3 border-y-[1px]">Automated system process</li>
            <li className="p-3 border-y-[1px]">
              Manual API request (Managed API key for Tanzanian Governmental
              Portal)
            </li>
            <li className="p-3 border-y-[1px]">Felix Miller</li>
            <li className="p-3 border-y-[1px]">Automated system process</li>
            <li className="p-3 border-y-[1px]">Automated system process</li>
            <li className="p-3 border-y-[1px]">Automated system process</li>
            <li className="p-3 border-y-[1px]">
              Manual API request (Managed API key for Tanzanian Governmental
              Portal)
            </li>
            <li className="p-3 border-y-[1px]">Automated system process</li>
            <li className="p-3 border-y-[1px]">Automated system process</li>
            <li className="p-3 border-y-[1px]">Automated system process</li>
          </ul>
        </div>
        <div className="flex-[5] border-[1px]">
          <p className="bg-gray-100 p-3 font-semibold text-gray-600">
            Description
          </p>
          <ul>
            <li className="p-3 border-y-[1px]">
              Called &quot;Query Account Summary&quot; using &quot;BancABC
              Flexcube&quot;
            </li>
            <li className="p-3 border-y-[1px]">
              Received &quot;TOP_UP_PAY_OFF_BALANCE_REQUEST&quot; using
              &quot;Tanzanian Governmental Portal&quot;
            </li>
            <li className="p-3 border-y-[1px]">
              Transitioned the application status to &quot;Contract active&quot;
            </li>
            <li className="p-3 border-y-[1px]">
              Called &quot;Send disbursement notification&quot; using
              &quot;Tanzanian Governmental Portal&quot;
            </li>
            <li className="p-3 border-y-[1px]">
              Transitioned the application status to &quot;Application waiting
              contract activation&quot;
            </li>
            <li className="p-3 border-y-[1px]">
              Transitioned &quot;External review by employer&quot; loan review
              decision to &quot;Accepted&quot;
            </li>
            <li className="p-3 border-y-[1px]">
              Received &quot;LOAN_FINAL_APPROVAL_NOTIFICATION&quot; using
              &quot;Tanzanian Governmental Portal&quot;
            </li>
            <li className="p-3 border-y-[1px]">
              Called &quot;Send initial approval notification&quot; using
              &quot;Tanzanian Governmental Portal&quot;
            </li>
            <li className="p-3 border-y-[1px]">
              Transitioned the application status to &quot;Application waiting
              review&quot;
            </li>
            <li className="p-3 border-y-[1px]">
              Evaluation credit scoring when accepted
            </li>
          </ul>
        </div>
        <div className="flex-[1] border-[1px]">
          <div>
            <p className="bg-gray-100 p-3 font-semibold text-gray-600 flex justify-between">
              Succesful event
              <FaSort className="fill-gray-400" />
            </p>
          </div>
          <div className="p-3 border-y-[1px] flex justify-between">
            <p className="flex items-center text-green-600 gap-1.5 font-bold">
              <FaCheckCircle className="h-4 w-4" />
              Yes
            </p>
            <IoEyeOutline className="h-4 w-4 text-gray-600" />
          </div>
          <div className="p-3 border-y-[1px] flex justify-between">
            <p className="flex items-center text-green-600 gap-1.5 font-bold">
              <FaCheckCircle className="h-4 w-4" />
              Yes
            </p>
            <IoEyeOutline className="h-4 w-4 text-gray-600" />
          </div>
          <div className="p-3 border-y-[1px] flex justify-between">
            <p className="flex items-center text-green-600 gap-1.5 font-bold">
              <FaCheckCircle className="h-4 w-4" />
              Yes
            </p>
            <IoEyeOutline className="h-4 w-4 text-gray-600" />
          </div>
          <div className="p-3 border-y-[1px] flex justify-between">
            <p className="flex items-center text-green-600 gap-1.5 font-bold">
              <FaCheckCircle className="h-4 w-4" />
              Yes
            </p>
            <IoEyeOutline className="h-4 w-4 text-gray-600" />
          </div>
          <div className="p-3 border-y-[1px] flex justify-between">
            <p className="flex items-center text-green-600 gap-1.5 font-bold">
              <FaCheckCircle className="h-4 w-4" />
              Yes
            </p>
            <IoEyeOutline className="h-4 w-4 text-gray-600" />
          </div>
          <div className="p-3 border-y-[1px] flex justify-between">
            <p className="flex items-center text-green-600 gap-1.5 font-bold">
              <FaCheckCircle className="h-4 w-4" />
              Yes
            </p>
            <IoEyeOutline className="h-4 w-4 text-gray-600" />
          </div>
          <div className="p-3 border-y-[1px] flex justify-between">
            <p className="flex items-center text-green-600 gap-1.5 font-bold">
              <FaCheckCircle className="h-4 w-4" />
              Yes
            </p>
            <IoEyeOutline className="h-4 w-4 text-gray-600" />
          </div>
          <div className="p-3 border-y-[1px] flex justify-between">
            <p className="flex items-center text-green-600 gap-1.5 font-bold">
              <FaCheckCircle className="h-4 w-4" />
              Yes
            </p>
            <IoEyeOutline className="h-4 w-4 text-gray-600" />
          </div>
          <div className="p-3 border-y-[1px] flex justify-between">
            <p className="flex items-center text-green-600 gap-1.5 font-bold">
              <FaCheckCircle className="h-4 w-4" />
              Yes
            </p>
            <IoEyeOutline className="h-4 w-4 text-gray-600" />
          </div>
          <div className="p-3 border-y-[1px] flex justify-between">
            <p className="flex items-center text-green-600 gap-1.5 font-bold">
              <FaCheckCircle className="h-4 w-4" />
              Yes
            </p>
            <IoEyeOutline className="h-4 w-4 text-gray-600" />
          </div>
        </div>
      </div>
      <div className="flex p-3 bg-gray-100 justify-between items-center">
        <p className="text-[12px]">
          Showing 1 - 10 (14 results were found in total)
        </p>
        <div className="flex gap-3">
          <button className="border-[1px] justify-center flex items-center gap-2 px-3 py-1 rounded-md bg-gray-50 text-gray-400 font-bold">
            <FaAngleLeft className="h-4 w-4" />
            Previous
          </button>
          <button className="border-[1px] flex justify-center items-center gap-2 px-3 py-1 rounded-md bg-white text-gray-800 font-bold border-gray-300">
            Next
            <FaAngleRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
