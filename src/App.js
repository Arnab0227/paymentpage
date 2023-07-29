import PaymentDetails from "./components/PaymentDetails";
import AditionalInformation from "./components/AdditionalInformation";
import ModeOfPayment from "./components/ModeOfPayment";
import Total from "./components/Total";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Rightpanel from "./components/RightPanel";
import TicketePromise from "./components/TicketePromise";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div>
      <div className="pb-40">
        <Navbar />
      </div>
      <div className=" justify-between flex pb-4">
        <div className="w-2/3 border-r">
          <PaymentDetails />
          <AditionalInformation />
          <ModeOfPayment />
          <Total />
        </div>
        <Rightpanel />
      </div>
      <Accordion />
      <TicketePromise />

      <Footer />
    </div>
  );
}
export default App;
