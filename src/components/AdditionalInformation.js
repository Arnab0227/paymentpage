import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

function AditionalInformation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-10 pt-4 pb-5">
      <p className="text-xl font-semibold pb-2">Additional Information</p>
      <p>We need a few more details to complete your reservation.</p>
      <form action="" className="flex pt-5 pr-5 pb-5 items-center">
        <div className="w-1/2 mr-4">
          <label htmlFor="">&lt;Full Name&gt;</label>
          <input
            type="text"
            className="p-2 w-full outline-gray-300 block mb-4 rounded-lg outline outline-2 focus-within:shadow-lg"
            placeholder="<custom input>"
          />
        </div>
        <div className="p-2 w-1/2 h-10 mt-6 outline-gray-300 block mb-4 rounded-lg outline outline-2 focus-within:shadow-lg">
          <div onClick={(e) => setIsOpen(!isOpen)}>
            <div className="flex items-center justify-between space-x-2 pr-5 ">
              &lt;dropdown&gt;
              <div className="cursor-pointer"><GoChevronDown /></div>
            </div>
          </div>
          {isOpen && (
            <div>
              <div className="border items-center h-10 mt-6 outline-gray-300 block mb-4 rounded-lg outline outline-2">&lt;dropdown&gt;</div>
              <div className="border items-center h-10 mt-4 outline-gray-300 block mb-4 rounded-lg outline outline-2">&lt;dropdown&gt;</div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default AditionalInformation;
