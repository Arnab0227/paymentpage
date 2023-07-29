import { BsCreditCard } from "react-icons/bs";
import { SiKlarna } from "react-icons/si";
import { FaRegCircle, FaDotCircle } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";

function ModeOfPayment() {
  return (
    <div className="p-10 pt-0 pr-5 pb-5">
      <p className="text-xl font-semibold pb-2">Select your mode of payment</p>
      <p>Payments with Tickete are secure and encrypted.</p>
      <div className="flex justify-between pr-5 pt-5 items-center ">
        <div className="flex items-center space-x-3">
          <BsCreditCard />
          <p> Credit & debit card</p>
        </div>
        <div className="cursor-pointer">
          <FaDotCircle />
        </div>
      </div>
      <form action="" className="pt-5 pr-5">
        <div className="flex w-full">
          <div className="w-1/2 mr-4">
            <label className="">&lt;Name on Card&gt;</label>
            <input
              className="p-2  w-full mr-2 outline-gray-300 block mb-4 rounded-lg outline outline-2 focus-within:shadow-lg"
              type="text"
              placeholder="Tickete Inc"
              required
            />
          </div>
          <div className="w-1/2 mr-4 relative">
            <label className="" htmlFor="">
              {" "}
              &lt;Card Number&gt;
            </label>
            <input
              className="p-2 w-full mr-2 outline-gray-300 block mb-4 rounded-lg outline outline-2 focus-within:shadow-lg"
              type="number"
              placeholder="1234 1234 1234 1234"
              required
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none text-4xl pt-1">
              <RiVisaLine />
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-1/2 mr-4">
            <label className="">&lt;Expiry Date&gt;</label>
            <input
              className="p-2  w-full mr-2 outline-gray-300 block mb-4 rounded-lg outline outline-2 focus-within:shadow-lg"
              type="number"
              placeholder="06/26"
              required
            />
          </div>
          <div className="w-1/2 mr-4">
            <label className="" htmlFor="">
              {" "}
              &lt;CVV/CVC&gt;
            </label>
            <input
              className="p-2 w-full mr-2 outline-gray-300 block mb-4 rounded-lg outline outline-2 focus-within:shadow-lg"
              type="text"
              placeholder="***"
              required
            />
          </div>
        </div>
      </form>

      <div className="pt-2 pr-5">
        <div className="border-t border-b flex justify-between items-center  ">
          <div className="flex items-center space-x-3">
            <SiKlarna />
            <p className="pt-2 pb-2">Klarna</p>
          </div>
          <div className="cursor-pointer">
            <FaRegCircle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModeOfPayment;
