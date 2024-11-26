export default function Finalization() {
  return (
    <section className="flex flex-col gap-5 rounded-md border-[1px] bg-white">
      <div className="flex p-3">
        <div className="flex flex-[2] flex-col">
          <h2 className="text-xl font-semibold">
            Contract finalization decision
          </h2>
          <p className="text-gray-500">
            Enter details about loan contract finalization decision
          </p>
        </div>
        <div className="flex flex-[4] flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-sm">Finalization date</span>
            <input type="text" className="rounded-md border-[1px] px-2 py-2" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="flex items-center gap-2 text-sm">
              Comment
              <span className="rounded-md bg-gray-100 px-1 py-1 text-xs font-semibold text-gray-500">
                Optional
              </span>
            </p>
            <input type="text" className="rounded-md border-[1px] px-2 py-8" />
          </div>
          <div className="flex w-[650px] items-start">
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
      <div className="flex flex-[1] border-t-[1px] bg-gray-100 p-3">
        <button className="flex w-full justify-center rounded-md bg-simbuka py-3 text-sm text-white transition duration-300 hover:bg-simbuka2">
          Finalize contract
        </button>
      </div>
    </section>
  );
}
