export default function Finalization() {
  return (
    <section className="shadow-custom flex flex-col gap-5 rounded-md border-[1px] bg-white">
      <div className="flex p-3">
        <div className="flex flex-[2] flex-col">
          <h2 className="text-md font-[450]">Contract finalization decision</h2>
          <p className="text-sm text-gray-600">
            Enter details about loan contract finalization decision
          </p>
        </div>
        <div className="flex flex-[4] flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-[500] text-gray-700">
              Finalization date
            </span>
            <input
              type="text"
              className="rounded-md border-[1px] border-gray-300 px-2 py-1"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="flex items-center gap-2 text-sm font-[500] text-gray-700">
              Comment
              <span className="rounded-md bg-gray-100 px-1 py-0.5 text-xs font-semibold text-gray-500">
                Optional
              </span>
            </p>
            <input
              type="text"
              className="rounded-md border-[1px] border-gray-300 px-2 py-8"
            />
          </div>
          <div className="flex w-[650px] items-start">
            <div className="inline-flex items-center p-0.5 pr-2">
              <input
                type="checkbox"
                className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-slate-300 transition-all checked:border-slate-800 checked:bg-slate-800 hover:shadow-md"
                id="check"
              />
              <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-0 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-[13px] font-semibold text-gray-600">
                Finalize loan contract
              </h2>
              <p className="leading-1 text-xs text-gray-500">
                By confirming you acknowledge that no further changes can be
                made to the loan. Please ensure all details are correct before
                proceeding.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-[1] border-t-[1px] bg-gray-100 p-3">
        <button className="flex w-full justify-center rounded-md bg-simbuka py-3 text-xs font-bold text-white transition duration-300 hover:bg-simbuka2">
          Finalize contract
        </button>
      </div>
    </section>
  );
}
