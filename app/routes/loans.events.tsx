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
    <div className="flex flex-col rounded-md border bg-white text-sm shadow-2xl">
      <h2 className="border-b-[1px] p-3 py-4 text-[18px]">Events</h2>
      <div className="flex items-center justify-between">
        <div className="relative px-3 py-2">
          <FaSearch className="absolute left-[19px] top-[18px] h-2.5 w-2.5 fill-gray-500" />
          <input
            type="text"
            defaultValue="Search events..."
            className="w-[255px] rounded-[4px] border-[1px] px-7 py-1.5 text-xs text-gray-400"
          />
        </div>
        <button className="mr-3 flex h-[30px] w-[100px] items-center justify-center gap-3 rounded-md border-[1px] font-semibold text-gray-500 shadow-md">
          <GoGear className="h-4 w-4" />
          Options
        </button>
      </div>
      <div className="flex">
        <div className="flex-[1.3] border-r-[1px] border-t-[1px]">
          <p className="bg-graybg flex items-center justify-between p-3 font-semibold text-gray-600">
            Timestamp
            <FaSort className="fill-graysort size-3" />
          </p>
          <ul className="">
            <li
              className="border-t-[1px] p-3"
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              }}
            >
              2024-11-22 15:22:48.852
            </li>
            <li
              className="border-t-[1px] p-3"
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              }}
            >
              2024-11-22 15:22:48.811
            </li>
            <li
              className="border-t-[1px] p-3"
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              }}
            >
              2024-11-22 15:21:19.166
            </li>
            <li
              className="border-t-[1px] p-3"
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              }}
            >
              2024-11-22 15:21:19.154
            </li>
            <li
              className="border-t-[1px] p-3"
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              }}
            >
              2024-11-22 15:21:01.582
            </li>
            <li
              className="border-t-[1px] p-3"
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              }}
            >
              2024-11-22 15:21:01.565
            </li>
            <li
              className="border-t-[1px] p-3"
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              }}
            >
              2024-11-22 15:21:01.538
            </li>
            <li
              className="border-t-[1px] p-3"
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              }}
            >
              2024-11-22 15:20:49.913
            </li>
            <li
              className="border-t-[1px] p-3"
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              }}
            >
              2024-11-22 15:20:49.905
            </li>
            <li
              className="border-t-[1px] p-3"
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              }}
            >
              2024-11-22 15:20:48.874
            </li>
          </ul>
        </div>
        <div className="flex-[4] border-r-[1px] border-t-[1px]">
          <p className="bg-graybg p-3 font-semibold text-gray-600">Causer</p>
          <ul>
            <li className="border-t-[1px] p-3">Automated system process</li>
            <li className="border-t-[1px] p-3">
              Manual API request (Managed API key for Tanzanian Governmental
              Portal)
            </li>
            <li className="border-t-[1px] p-3">Felix Miller</li>
            <li className="border-t-[1px] p-3">Automated system process</li>
            <li className="border-t-[1px] p-3">Automated system process</li>
            <li className="border-t-[1px] p-3">Automated system process</li>
            <li className="border-t-[1px] p-3">
              Manual API request (Managed API key for Tanzanian Governmental
              Portal)
            </li>
            <li className="border-t-[1px] p-3">Automated system process</li>
            <li className="border-t-[1px] p-3">Automated system process</li>
            <li className="border-t-[1px] p-3">Automated system process</li>
          </ul>
        </div>
        <div className="flex-[5] border-r-[1px] border-t-[1px]">
          <p className="bg-graybg p-3 font-semibold text-gray-600">
            Description
          </p>
          <ul>
            <li className="border-t-[1px] p-3">
              Called &quot;Query Account Summary&quot; using &quot;BancABC
              Flexcube&quot;
            </li>
            <li className="border-t-[1px] p-3">
              Received &quot;TOP_UP_PAY_OFF_BALANCE_REQUEST&quot; using
              &quot;Tanzanian Governmental Portal&quot;
            </li>
            <li className="border-t-[1px] p-3">
              Transitioned the application status to &quot;Contract active&quot;
            </li>
            <li className="border-t-[1px] p-3">
              Called &quot;Send disbursement notification&quot; using
              &quot;Tanzanian Governmental Portal&quot;
            </li>
            <li className="border-t-[1px] p-3">
              Transitioned the application status to &quot;Application waiting
              contract activation&quot;
            </li>
            <li className="border-t-[1px] p-3">
              Transitioned &quot;External review by employer&quot; loan review
              decision to &quot;Accepted&quot;
            </li>
            <li className="border-t-[1px] p-3">
              Received &quot;LOAN_FINAL_APPROVAL_NOTIFICATION&quot; using
              &quot;Tanzanian Governmental Portal&quot;
            </li>
            <li className="border-t-[1px] p-3">
              Called &quot;Send initial approval notification&quot; using
              &quot;Tanzanian Governmental Portal&quot;
            </li>
            <li className="border-t-[1px] p-3">
              Transitioned the application status to &quot;Application waiting
              review&quot;
            </li>
            <li className="border-t-[1px] p-3">
              Evaluation credit scoring when accepted
            </li>
          </ul>
        </div>
        <div className="flex-[1] border-r-[1px] border-t-[1px]">
          <div>
            <p className="bg-graybg flex items-center justify-between p-3 font-semibold text-gray-600">
              Succesful event
              <FaSort className="fill-graysort size-3" />
            </p>
          </div>
          <div className="flex justify-between border-t-[1px] p-3">
            <p className="flex items-center gap-1.5 font-bold text-green-600">
              <FaCheckCircle className="h-4 w-4" />
              Yes
            </p>
            <IoEyeOutline className="h-4 w-4 text-gray-600" />
          </div>
          <div className="flex justify-between border-t-[1px] p-3">
            <p className="flex items-center gap-1.5 font-bold text-green-600">
              <FaCheckCircle className="h-4 w-4" />
              Yes
            </p>
            <IoEyeOutline className="h-4 w-4 text-gray-600" />
          </div>
          <div className="flex justify-between border-t-[1px] p-3">
            <p className="flex items-center gap-1.5 font-bold text-green-600">
              <FaCheckCircle className="h-4 w-4" />
              Yes
            </p>
            <IoEyeOutline className="h-4 w-4 text-gray-600" />
          </div>
          <div className="flex justify-between border-t-[1px] p-3">
            <p className="flex items-center gap-1.5 font-bold text-green-600">
              <FaCheckCircle className="h-4 w-4" />
              Yes
            </p>
            <IoEyeOutline className="h-4 w-4 text-gray-600" />
          </div>
          <div className="flex justify-between border-t-[1px] p-3">
            <p className="flex items-center gap-1.5 font-bold text-green-600">
              <FaCheckCircle className="h-4 w-4" />
              Yes
            </p>
            <IoEyeOutline className="h-4 w-4 text-gray-600" />
          </div>
          <div className="flex justify-between border-t-[1px] p-3">
            <p className="flex items-center gap-1.5 font-bold text-green-600">
              <FaCheckCircle className="h-4 w-4" />
              Yes
            </p>
            <IoEyeOutline className="h-4 w-4 text-gray-600" />
          </div>
          <div className="flex justify-between border-t-[1px] p-3">
            <p className="flex items-center gap-1.5 font-bold text-green-600">
              <FaCheckCircle className="h-4 w-4" />
              Yes
            </p>
            <IoEyeOutline className="h-4 w-4 text-gray-600" />
          </div>
          <div className="flex justify-between border-t-[1px] p-3">
            <p className="flex items-center gap-1.5 font-bold text-green-600">
              <FaCheckCircle className="h-4 w-4" />
              Yes
            </p>
            <IoEyeOutline className="h-4 w-4 text-gray-600" />
          </div>
          <div className="flex justify-between border-t-[1px] p-3">
            <p className="flex items-center gap-1.5 font-bold text-green-600">
              <FaCheckCircle className="h-4 w-4" />
              Yes
            </p>
            <IoEyeOutline className="h-4 w-4 text-gray-600" />
          </div>
          <div className="flex justify-between border-t-[1px] p-3">
            <p className="flex items-center gap-1.5 font-bold text-green-600">
              <FaCheckCircle className="h-4 w-4" />
              Yes
            </p>
            <IoEyeOutline className="h-4 w-4 text-gray-600" />
          </div>
        </div>
      </div>
      <div className="bg-graybg flex items-center justify-between rounded-b-md border-t-[1px] p-3 font-[350]">
        <p className="text-[12px]">
          Showing 1 - 10 (14 results were found in total)
        </p>
        <div className="flex gap-3">
          <button className="flex items-center justify-center gap-2 rounded-md border-[1px] bg-gray-50 px-3 py-1 font-bold text-gray-400">
            <FaAngleLeft className="h-4 w-4" />
            Previous
          </button>
          <button className="flex items-center justify-center gap-2 rounded-md border-[1px] border-gray-300 bg-white px-3 py-1 font-bold text-gray-800">
            Next
            <FaAngleRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
