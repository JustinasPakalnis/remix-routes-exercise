export default function Finalization() {
  return (
    <section className="flex flex-col  bg-white rounded-md border-[1px] gap-5">
      <div className="flex p-3">
        <div className="flex-[2] flex flex-col">
          <h2 className="text-xl font-semibold">
            Contract finalization decision
          </h2>
          <p className="text-gray-500">
            Enter details about loan contract finalization decision
          </p>
        </div>
        <div className="flex-[4] flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-sm">Finalization date</span>
            <input type="text" className="border-[1px] rounded-md px-2 py-2" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm flex items-center gap-2">
              Comment
              <span className="text-gray-500 font-semibold text-xs bg-gray-100 px-1 py-1 rounded-md">
                Optional
              </span>
            </p>
            <input type="text" className="border-[1px] rounded-md px-2 py-8" />
          </div>
          <div className="flex items-start w-[650px]">
            <input type="checkbox" className="m-[5px]" />
            <div>
              <h2 className="font-semibold text-gray-700">
                Finalize loan contract
              </h2>
              <span className="text-sm text-gray-400">
                By confirming you acknowledge that no further changes can be
                made to the loan. Please ensure all details are correct before
                proceeding.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-gray-100 flex-[1] border-t-[1px] p-3">
        <button className="bg-simbuka hover:bg-simbuka2 transition duration-300 rounded-md text-white py-3 flex w-full justify-center text-sm">
          Finalize contract
        </button>
      </div>
    </section>
  );
}
