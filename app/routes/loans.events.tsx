import { FaSort, FaCheckCircle } from "react-icons/fa";
import Down from "~/components/Down";
import Gear from "~/components/Gear";
import Eye from "~/components/Eye";
import Search from "~/components/Search";
export default function Events() {
  return (
    <div className="shadow-custom ml-[250px] flex flex-1 flex-col rounded-md border bg-white text-sm">
      <h2 className="border-b-[1px] p-3 py-4 text-[18px]">Events</h2>
      <div className="flex flex-wrap items-center justify-between px-3 py-2">
        <div className="relative mb-2 sm:mb-0">
          <Search className="absolute left-[8px] top-[7px] h-4 w-4 text-gray-500" />
          <input
            type="text"
            defaultValue="Search events..."
            className="w-[250px] rounded-[4px] border-[1px] px-7 py-1.5 text-xs text-gray-400"
          />
        </div>
        <button className="default-focus-ring relative flex cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white py-1.5 pr-3 text-xs font-semibold text-gray-600 no-underline transition duration-150 hover:bg-gray-100">
          <Gear />
          Options
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto font-[350]">
          <thead>
            <tr className="border-b border-t border-gray-200 bg-gray-50 text-xs text-gray-600">
              <th className="flex items-center justify-between px-4 py-[11px] text-left font-[600]">
                <p>Timestamp</p>
                <FaSort className="fill-graysort size-2.5" />
              </th>
              <th className="border-l px-4 py-[11px] text-left font-[600]">
                Causer
              </th>
              <th className="border-l px-4 py-[11px] text-left font-[600]">
                Description
              </th>
              <th className="flex items-center justify-between whitespace-nowrap border-l px-4 py-[11px] text-left font-[600]">
                <p>Successful Event</p>
                <FaSort className="fill-graysort size-2.5" />
              </th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr
                key={index}
                className="whitespace-nowrap border-b border-gray-200 bg-white py-9 text-sm font-[450] last:border-b-0"
              >
                <td
                  className="px-4 py-[9px] text-gray-700 underline-offset-4"
                  style={{
                    textDecoration: "underline",
                    textDecorationStyle: "dashed",
                  }}
                >
                  {event.timestamp}
                </td>
                <td className="border-l px-4 py-[9px] text-gray-700">
                  {event.causer}
                </td>
                <td className="border-l px-4 py-[9px] text-gray-700">
                  {event.description}
                </td>
                <td className="border-l py-[9px] pl-4 pr-2 text-gray-700">
                  <div className="flex items-center justify-between">
                    <p className="text-greenhl flex items-center gap-1.5 font-bold">
                      <FaCheckCircle className="h-3.5 w-3.5" />
                      Yes
                    </p>
                    <Eye />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-graybg flex flex-wrap items-center justify-between rounded-b-md border-t-[1px] p-3 font-[350]">
        <p className="text-[12px]">
          Showing 1 - 10 (14 results were found in total)
        </p>
        <div className="flex gap-3">
          <button className="flex items-center justify-center gap-2 rounded-md border-[1px] bg-white px-3 py-1.5 text-xs font-semibold text-gray-300">
            <Down className={"h-4 w-4 transition-transform"} />
            Previous
          </button>
          <button className="flex items-center justify-center gap-2 rounded-md border-[1px] border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-800">
            Next
            <Down className={"h-4 w-4 rotate-180 transition-transform"} />
          </button>
        </div>
      </div>
    </div>
  );
}

const events = [
  {
    timestamp: "2024-11-22 15:22:48.852",
    causer: "Automated system process",
    description: 'Called "Query Account Summary" using "BancABC Flexcube"',
  },
  {
    timestamp: "2024-11-22 15:22:48.811",
    causer:
      "Manual API request (Managed API key for Tanzanian Governmental Portal)",
    description:
      'Received "TOP_UP_PAY_OFF_BALANCE_REQUEST" using "Tanzanian Governmental Portal"',
  },
  {
    timestamp: "2024-11-22 15:21:19.166",
    causer: "Felix Miller",
    description: 'Transitioned the application status to "Contract active"',
  },
  {
    timestamp: "2024-11-22 15:21:19.154",
    causer: "Automated system process",
    description:
      'Called "Send disbursement notification" using "Tanzanian Governmental Portal"',
  },
  {
    timestamp: "2024-11-22 15:21:01.582",
    causer: "Automated system process",
    description:
      'Transitioned the application status to "Application waiting contract activation"',
  },
  {
    timestamp: "2024-11-22 15:21:01.565",
    causer: "Automated system process",
    description:
      'Transitioned "External review by employer" loan review decision to "Accepted"',
  },
  {
    timestamp: "2024-11-22 15:21:01.538",
    causer:
      "Manual API request (Managed API key for Tanzanian Governmental Portal)",
    description:
      'Received "LOAN_FINAL_APPROVAL_NOTIFICATION" using "Tanzanian Governmental Portal"',
  },
  {
    timestamp: "2024-11-22 15:20:49.913",
    causer: "Automated system process",
    description:
      'Called "Send initial approval notification" using "Tanzanian Governmental Portal"',
  },
  {
    timestamp: "2024-11-22 15:20:49.905",
    causer: "Automated system process",
    description:
      'Transitioned the application status to "Application waiting review"',
  },
  {
    timestamp: "2024-11-22 15:20:48.874",
    causer: "Automated system process",
    description: "Evaluation credit scoring when accepted",
  },
];
