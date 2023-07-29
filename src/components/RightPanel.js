import { BiSolidPurchaseTag } from "react-icons/bi";
import { PiTicketFill } from "react-icons/pi";
import { IoTime } from "react-icons/io5";
import { BsCalendar2DateFill } from "react-icons/bs";

function Rightpanel() {
  return (
    <div className="p-10 pt-0 w-1/3">
      <div className="pb-5">
        <img
          className="rounded-lg"
          src="https://cdn.getyourguide.com/img/tour/6040b7b16f5df.jpeg/146.jpg"
          alt="image1"
        />

        <p className="pt-1 font-semibold">
          Amsterdum opeg boat canal cruise - Live Ggide - from Anne Frgnk House
        </p>
        <div>
          <div className="pt-3 flex items-center space-x-3">
            <PiTicketFill />
            <p className="font-semibold">&lt;Varient name&gt;</p>
          </div>
          <div className="pt-3 flex items-center space-x-3">
            <BsCalendar2DateFill />
            <p className="font-semibold">&lt;date&gt;</p>
          </div>
          <div className="pt-3 flex items-center space-x-3">
            <IoTime />
            <p className="font-semibold">&lt;time&gt;</p>
          </div>
        </div>
      </div>
      <div className="border-t pt-10">
        <p className="text-xl font-semibold">Tickets Overview</p>
        <div className="flex justify-between items-center pt-5 pb-5">
          <p>&lt;pax type&gt;</p>
          <p>&lt;price&gt;</p>
        </div>
        <div className="flex justify-between items-center pb-5">
          <p>&lt;pax type&gt;</p>
          <p>&lt;price&gt;</p>
        </div>
        <div className="flex justify-between items-center pb-5">
          <p>&lt;fee&gt;</p>
          <p>&lt;price&gt;</p>
        </div>
        <div className="flex justify-between items-center text-green-500 pb-5">
          <p>&lt;discount applied&gt;</p>
          <p>&lt;- price&gt;</p>
        </div>
        <div className="border-t border-b  flex items-center space-x-3">
          <div className="text-green-700 cursor-pointer">
            <BiSolidPurchaseTag />
          </div>
          <p className="text-green-500 underline font-semibold pt-4 pb-4 cursor-pointer ">
            Have a promo code?
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center font-semibold pt-4">
          <p>Total</p>
          <p>&lt;price&gt;</p>
        </div>
        <p className="pt-2 underline">You will pay in &lt;currency&gt;</p>
      </div>
      <div className="pt-3">
        <div className="border p-3 rounded-lg bg-gray-200 ">
          <p>Free Cancellation</p>
          <p>cancel before &lt;date&gt; for a full refund</p>
        </div>
      </div>
    </div>
  );
}

export default Rightpanel;
