import { LuTwitter } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io5";
import { PiFacebookLogoBold } from "react-icons/pi";

function Footer() {
  return (
    <div className="bg-black text-white">
      <p className=" p-10 text-2xl">tickete</p>
      <div className="px-10">
        <div className="pb-10 pt-5 border-t flex justify-between items-center">
          <div className=" flex space-x-5 underline ">
            <p className="cursor-pointer">@Tickete.Inc</p>
            <p className="cursor-pointer">Privacy</p>
            <p className="cursor-pointer">Terms</p>
            <p className="cursor-pointer">Cancellation Policy</p>
          </div>
          <div className="justify-end flex space-x-3">
            <div className="cursor-pointer"><IoLogoInstagram /></div>
            <div className="cursor-pointer"><PiFacebookLogoBold /></div>
            <div className="cursor-pointer"><LuTwitter /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
