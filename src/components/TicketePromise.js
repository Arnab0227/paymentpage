import { PiChatsTeardropFill } from "react-icons/pi";
import { SiFsecure } from "react-icons/si";
import { BiCertification } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";

function TicketePromise() {
  return (
    <>
      <div className="pt-10 px-10">
        <p className="text-2xl font-semibold ">The Tickete promise</p>
      </div>

      <div className="flex p-10 space-x-10">
        <div className="w-80 h-70 border border-gray-300 rounded-md">
          <div className="p-5 text-2xl text-green-600">
            <BiCertification />
          </div>
          <p className="p-5 pb-2 font-semibold">Official tickets</p>
          <p className="px-5 pb-3">Authorized reseller to top attraction</p>
        </div>
        <div className="w-80 h-70 border border-gray-300 rounded-md">
          <div className="p-5 text-2xl text-red-950">
            <PiChatsTeardropFill />
          </div>
          <p className="p-5 pb-2 font-semibold">24/7 dedicated support</p>
          <p className="px-5 pb-3">we're here to help, talk to an expert</p>
        </div>
        <div className="w-80 h-70 border border-gray-300 rounded-md">
          <div className="p-5 text-2xl text-slate-800">
            <SlCalender />
          </div>
          <p className="p-5 pb-2 font-semibold">Flexibility bookings</p>
          <p className="px-5 pb-3">Book Stress-free with easy cancellation</p>
        </div>
        <div className="w-80 h-70 border border-gray-300 rounded-md">
          <div className="p-5 text-2xl text-indigo-900">
            <SiFsecure />
          </div>
          <p className="p-5 pb-2 font-semibold">100% secure payments</p>
          <p className="px-5 pb-3">
            Internationally recognized encrypted payment process
          </p>
        </div>
      </div>
    </>
  );
}

export default TicketePromise;
