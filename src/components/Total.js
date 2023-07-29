import { SiFsecure } from "react-icons/si";
import { FaDotCircle } from "react-icons/fa";

function Total() {
  return (
    <div className="p-10 pt-0">
      <div className="w-full">
        <p className="text-xl pb-2 pt-10 font-semibold ">
          Total: &lt;price&gt;
        </p>
        <p className="underline pb-5">You will pay in &lt;curency&gt;</p>
      </div>

      <div className="border rounded px-5 h-10 flex items-center space-x-2 bg-gray-200">
        <div className="cursor-pointer">
          <FaDotCircle />
        </div>
        <p>
          Receive travel tips, suggestions and offers in &lt;city&gt; by email
        </p>
      </div>

      <p className="pt-5 pb-3 flex">
        with payment, you agree to the general
        <p className=" cursor-pointer px-1 text-blue-900">
          terms and conditions of tickete
        </p>
        & the
        <p className=" cursor-pointer px-1 text-blue-900">activity provider</p>.
      </p>
      <button className="border p-2 rounded-lg bg-black flex space-x-2 items-center cursor-pointer text-white">
        <p>Confirm and Pay</p>
        <SiFsecure />
      </button>
    </div>
  );
}

export default Total;
