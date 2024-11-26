import OpenPage from "public/OpenPage";

export default function Overview() {
  return (
    <>
      <div className="flex border rounded-md bg-white shadow-md">
        <div className="flex-1 border-r p-3">
          <span className="text-gray-500 ">Maturity progress</span>
          <h2 className="text-xl">8.33</h2>
        </div>
        <div className="flex-1 border-r p-3">
          <span className="text-gray-500 ">Outstanding amount</span>
          <h2 className="text-xl">1,165,801.60 TZS</h2>
        </div>
        <div className="flex-1 p-3">
          <span className="text-gray-500 ">Maturity date</span>
          <h2 className="text-xl">2025-11-21</h2>
        </div>
      </div>
      <div className="border rounded-md bg-white text-sm shadow-md">
        <div className="flex border-b-[1px] px-3 py-3">
          <p className="flex-[2]">Product</p>
          <p className="flex-[5] text-blue-500 cursor-pointer flex items-start gap-1">
            BancEasy - Mkopo Rahisi <OpenPage />
          </p>
        </div>
        <div className="flex border-b-[1px] px-3 py-3">
          <p className="flex-[2]">Product segment</p>
          <p className="flex-[5]">Default Segmnet</p>
        </div>
        <div className="flex border-b-[1px] px-3 py-3">
          <p className="flex-[2]">Applicant</p>
          <p className="flex-[5] text-blue-500 cursor-pointer flex items-start gap-1">
            kauthar RATARI rashid <OpenPage />
          </p>
        </div>
        <div className="flex border-b-[1px] px-3 py-3">
          <p className="flex-[2]">Bank account</p>
          <p className="flex-[5]">
            011445888579 (Diamond Trust Bank Tanzania PLC, DTKETZTZ)
          </p>
        </div>
        <div className="flex border-b-[1px] px-3 py-3">
          <p className="flex-[2]">Interest rate</p>
          <p className="flex-[5]">15.42 / year</p>
        </div>
        <div className="flex border-b-[1px] px-3 py-3">
          <p className="flex-[2]">Loan term</p>
          <p className="flex-[5]">12 months</p>
        </div>
        <div className="flex border-b-[1px] px-3 py-3">
          <p className="flex-[2]">Installment length</p>
          <p className="flex-[5]">1 month</p>
        </div>
        <div className="flex border-b-[1px] px-3 py-3">
          <p className="flex-[2]">Loan amount</p>
          <p className="flex-[5]">1,000,000.00 TZS</p>
        </div>
        <div className="flex border-b-[1px] px-3 py-3">
          <p className="flex-[2]">Fees paid up-front</p>
          <p className="flex-[5]">0.00 TZS</p>
        </div>
        <div className="flex border-b-[1px] px-3 py-3">
          <p className="flex-[2]">Fees deducted from disbursement amount</p>
          <p className="flex-[5] flex gap-3">
            30,000.00 TZS
            <span className="text-blue-500 cursor-pointer flex items-start gap-1">
              View amount breakdown <OpenPage />
            </span>
          </p>
        </div>
        <div className="flex border-b-[1px] p-3 bg-gray-100 items-end h-14">
          <p>Extra Information</p>
        </div>
        <div className="flex px-3 py-3">
          <p className="flex-[2]">Flexcube account reference number</p>
          <p className="flex-[5]">1234</p>
        </div>
      </div>
    </>
  );
}
