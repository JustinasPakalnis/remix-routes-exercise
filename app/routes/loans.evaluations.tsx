import OpenPage from "~/components/OpenPage";
import { FaCheckCircle, FaSort } from "react-icons/fa";

import Down from "~/components/Down";
import Eye from "~/components/Eye";
export default function Evalaution() {
  return (
    <>
      <div className="shadow-custom rounded-md border-[1px] bg-white text-sm font-[500] tracking-normal">
        <h2 className="border-b-[1px] p-3 text-lg font-[400]">Evaluation</h2>
        <ul className="tracking-normal">
          <div className="flex border-b-[1px] border-gray-100 p-3">
            <li className="flex-[1.2]">Status</li>
            <li className="flex flex-[3] items-center gap-1 text-green-600">
              <FaCheckCircle />
              Accepted
            </li>
          </div>
          <div className="flex border-b-[1px] border-gray-100 p-3">
            <li className="flex-[1.2]">Credit score</li>
            <li className="flex flex-[3] items-center">897</li>
          </div>
          <div className="flex border-b-[1px] border-gray-100 p-3">
            <li className="flex-[1.2]">Risk level</li>
            <li className="flex flex-[3] items-center gap-2 font-normal text-blue-600">
              A1 (Very Low Risk)
              <OpenPage />
            </li>
          </div>
          <div className="flex p-3">
            <li className="flex-[1.2]">Loan limit</li>
            <li className="flex flex-[3] items-center gap-2 font-normal text-blue-600">
              40,000,000.00 TZS
              <OpenPage />
            </li>
          </div>
        </ul>
      </div>
      <section className="shadow-custom rounded-md border-[1px] bg-white text-sm">
        <div className="border-b-[1px] p-3">
          <h2 className="text-lg font-[400]">Policy Requirements</h2>
        </div>
        <div className="flex items-center justify-between">
          <div className="relative p-2.5 text-xs">
            <svg
              className="absolute left-[16px] top-[18px] h-4 w-4 text-gray-500"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.33333 2C7.4826 2 8.58481 2.45655 9.39746 3.2692C10.2101 4.08186 10.6667 5.18406 10.6667 6.33333C10.6667 7.40667 10.2733 8.39333 9.62667 9.15333L9.80667 9.33333H10.3333L13.6667 12.6667L12.6667 13.6667L9.33333 10.3333V9.80667L9.15333 9.62667C8.39333 10.2733 7.40667 10.6667 6.33333 10.6667C5.18406 10.6667 4.08186 10.2101 3.2692 9.39746C2.45655 8.58481 2 7.4826 2 6.33333C2 5.18406 2.45655 4.08186 3.2692 3.2692C4.08186 2.45655 5.18406 2 6.33333 2ZM6.33333 3.33333C4.66667 3.33333 3.33333 4.66667 3.33333 6.33333C3.33333 8 4.66667 9.33333 6.33333 9.33333C8 9.33333 9.33333 8 9.33333 6.33333C9.33333 4.66667 8 3.33333 6.33333 3.33333Z"
                fill="currentColor"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Search policy requirements..."
              className="w-[250px] rounded-md border-[1px] px-6 py-1.5 text-gray-400"
            />
          </div>
          <button className="default-focus-ring relative mr-3 flex cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white py-1.5 pr-3 text-xs font-semibold text-gray-600 no-underline transition duration-150 before:absolute before:inset-0 before:rounded-md before:shadow hover:bg-gray-100">
            <svg
              className="ml-2 mr-2 h-4 w-4"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00004 9.99992C9.10461 9.99992 10 9.10449 10 7.99992C10 6.89535 9.10461 5.99992 8.00004 5.99992C6.89547 5.99992 6.00004 6.89535 6.00004 7.99992C6.00004 9.10449 6.89547 9.99992 8.00004 9.99992Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12.4849 9.8181C12.4042 10.0009 12.3801 10.2037 12.4158 10.4003C12.4514 10.5969 12.5452 10.7783 12.6849 10.9211L12.7213 10.9575C12.834 11.0701 12.9234 11.2038 12.9844 11.3509C13.0454 11.4981 13.0768 11.6558 13.0768 11.8151C13.0768 11.9744 13.0454 12.1321 12.9844 12.2792C12.9234 12.4264 12.834 12.5601 12.7213 12.6726C12.6087 12.7853 12.475 12.8748 12.3278 12.9357C12.1807 12.9967 12.023 13.0281 11.8637 13.0281C11.7044 13.0281 11.5467 12.9967 11.3995 12.9357C11.2524 12.8748 11.1187 12.7853 11.0061 12.6726L10.9697 12.6363C10.8269 12.4966 10.6455 12.4028 10.4489 12.3672C10.2523 12.3315 10.0495 12.3556 9.86671 12.4363C9.68745 12.5131 9.53458 12.6407 9.42689 12.8033C9.31921 12.9659 9.26142 13.1564 9.26065 13.3514V13.4545C9.26065 13.7759 9.13294 14.0842 8.90562 14.3116C8.67831 14.5389 8.37 14.6666 8.04853 14.6666C7.72705 14.6666 7.41874 14.5389 7.19143 14.3116C6.96411 14.0842 6.8364 13.7759 6.8364 13.4545V13.3999C6.83171 13.1993 6.76678 13.0048 6.65005 12.8416C6.53332 12.6783 6.37018 12.554 6.18186 12.4848C5.99906 12.4041 5.79629 12.38 5.59968 12.4157C5.40308 12.4513 5.22166 12.545 5.07883 12.6848L5.04247 12.7211C4.92989 12.8338 4.79621 12.9232 4.64906 12.9842C4.50191 13.0452 4.34418 13.0766 4.18489 13.0766C4.0256 13.0766 3.86787 13.0452 3.72072 12.9842C3.57357 12.9232 3.43989 12.8338 3.32731 12.7211C3.21461 12.6086 3.12521 12.4749 3.06421 12.3277C3.00321 12.1806 2.97181 12.0228 2.97181 11.8636C2.97181 11.7043 3.00321 11.5465 3.06421 11.3994C3.12521 11.2522 3.21461 11.1186 3.32731 11.006L3.36368 10.9696C3.5034 10.8268 3.59712 10.6454 3.63277 10.4488C3.66842 10.2522 3.64435 10.0494 3.56368 9.86659C3.48685 9.68733 3.35929 9.53445 3.19669 9.42677C3.03409 9.31909 2.84355 9.2613 2.64853 9.26052H2.5455C2.22402 9.26052 1.91571 9.13282 1.6884 8.9055C1.46108 8.67819 1.33337 8.36988 1.33337 8.0484C1.33337 7.72693 1.46108 7.41862 1.6884 7.1913C1.91571 6.96399 2.22402 6.83628 2.5455 6.83628H2.60004C2.80064 6.83159 2.9952 6.76666 3.1584 6.64993C3.32161 6.53319 3.44593 6.37006 3.51519 6.18174C3.59587 5.99894 3.61993 5.79617 3.58429 5.59956C3.54864 5.40296 3.45491 5.22154 3.31519 5.07871L3.27883 5.04234C3.16613 4.92977 3.07673 4.79609 3.01573 4.64894C2.95473 4.50179 2.92333 4.34406 2.92333 4.18477C2.92333 4.02548 2.95473 3.86775 3.01573 3.7206C3.07673 3.57345 3.16613 3.43976 3.27883 3.32719C3.3914 3.21449 3.52509 3.12509 3.67223 3.06409C3.81938 3.00309 3.97711 2.97169 4.1364 2.97169C4.2957 2.97169 4.45343 3.00309 4.60057 3.06409C4.74772 3.12509 4.88141 3.21449 4.99398 3.32719L5.03034 3.36356C5.17318 3.50327 5.3546 3.597 5.5512 3.63265C5.7478 3.6683 5.95058 3.64423 6.13337 3.56355H6.18186C6.36111 3.48673 6.51399 3.35916 6.62167 3.19656C6.72936 3.03396 6.78714 2.84343 6.78792 2.6484V2.54537C6.78792 2.2239 6.91563 1.91559 7.14294 1.68827C7.37026 1.46096 7.67857 1.33325 8.00004 1.33325C8.32152 1.33325 8.62982 1.46096 8.85714 1.68827C9.08446 1.91559 9.21216 2.2239 9.21216 2.54537V2.59992C9.21294 2.79494 9.27073 2.98548 9.37841 3.14808C9.48609 3.31068 9.63897 3.43824 9.81822 3.51507C10.001 3.59575 10.2038 3.61981 10.4004 3.58416C10.597 3.54852 10.7784 3.45479 10.9213 3.31507L10.9576 3.27871C11.0702 3.16601 11.2039 3.0766 11.351 3.0156C11.4982 2.9546 11.6559 2.92321 11.8152 2.92321C11.9745 2.92321 12.1322 2.9546 12.2794 3.0156C12.4265 3.0766 12.5602 3.16601 12.6728 3.27871C12.7855 3.39128 12.8749 3.52496 12.9359 3.67211C12.9969 3.81926 13.0283 3.97699 13.0283 4.13628C13.0283 4.29557 12.9969 4.4533 12.9359 4.60045C12.8749 4.7476 12.7855 4.88128 12.6728 4.99386L12.6364 5.03022C12.4967 5.17306 12.403 5.35447 12.3673 5.55108C12.3317 5.74768 12.3557 5.95045 12.4364 6.13325V6.18174C12.5132 6.36099 12.6408 6.51387 12.8034 6.62155C12.966 6.72923 13.1565 6.78702 13.3516 6.7878H13.4546C13.7761 6.7878 14.0844 6.9155 14.3117 7.14282C14.539 7.37014 14.6667 7.67844 14.6667 7.99992C14.6667 8.32139 14.539 8.6297 14.3117 8.85702C14.0844 9.08433 13.7761 9.21204 13.4546 9.21204H13.4C13.205 9.21282 13.0145 9.27061 12.8519 9.37829C12.6893 9.48597 12.5617 9.63885 12.4849 9.8181Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            Options
          </button>
        </div>
        <div className="flex">
          <div className="bg-graybg flex flex-[8] items-center justify-between border-y-[1px] border-b-[1px] px-3 py-[11px]">
            <h2 className="text-xs font-semibold text-gray-600">
              Policy Requirements
            </h2>
            <FaSort className="fill-graysort mr-1.5 size-3" />
          </div>
          <div className="bg-graybg flex flex-[1.1] items-center justify-between border-[1px] border-b-[1px] px-3 py-[11px]">
            <h2 className="text-xs font-semibold text-gray-600">Decision</h2>
            <FaSort className="fill-graysort mr-1.5 size-3" />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-[8] items-center justify-between border-b-[1px] border-r-[1px] bg-white px-3">
            <p className="font-[400] text-gray-900">
              Customer must be 18 or more years old
            </p>
          </div>
          <div className="flex flex-[1.1] items-center justify-between border-b-[1px] bg-white px-3 py-[8px]">
            <p className="bg-greenbg text-greentxt rounded-md border-[1px] border-gray-300 px-2 py-0.5 text-xs font-semibold">
              Passed
            </p>
            <Eye />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-[8] items-center justify-between border-b-[1px] border-r-[1px] bg-white px-3">
            <p className="font-[400] text-gray-900">
              Customer must be 54 or less years old at loan maturity date
            </p>
          </div>
          <div className="flex flex-[1.1] items-center justify-between border-b-[1px] bg-white px-3 py-[8px]">
            <p className="bg-greenbg text-greentxt rounded-md border-[1px] border-gray-300 px-2 py-0.5 text-xs font-semibold">
              Passed
            </p>
            <Eye />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-[8] items-center justify-between border-b-[1px] border-r-[1px] bg-white px-3">
            <p className="font-[400] text-gray-900">
              Customer must be emplyed for a minimum of three months with their
              current employer
            </p>
          </div>
          <div className="flex flex-[1.1] items-center justify-between border-b-[1px] bg-white p-3 py-[8px]">
            <p className="bg-greenbg text-greentxt rounded-md border-[1px] border-gray-300 px-2 py-0.5 text-xs font-semibold">
              Passed
            </p>
            <Eye />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-[8] items-center justify-between border-b-[1px] border-r-[1px] bg-white px-3">
            <p className="">Customer must have a clean Creditinfo report</p>
          </div>
          <div className="flex flex-[1.1] items-center justify-between border-b-[1px] bg-white p-3 py-[8px]">
            <p className="bg-greenbg text-greentxt rounded-md border-[1px] border-gray-300 px-2 py-0.5 text-xs font-semibold">
              Passed
            </p>
            <Eye />
          </div>
        </div>
        <div className="bg-graybg flex items-center justify-between rounded-b-md p-3 font-[350]">
          <p className="text-[12px]">
            Showing 1 - 4 (4 results were found in total)
          </p>
          <div className="flex gap-3">
            <button className="flex items-center justify-center gap-2 rounded-md border-[1px] bg-white px-3 py-1.5 text-xs font-semibold text-gray-300">
              <Down className={"h-4 w-4 transition-transform"} />
              Previous
            </button>
            <button className="flex items-center justify-center gap-2 rounded-md border-[1px] bg-white px-3 py-1.5 text-xs font-semibold text-gray-300">
              Next
              <Down className={"h-4 w-4 rotate-180 transition-transform"} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
