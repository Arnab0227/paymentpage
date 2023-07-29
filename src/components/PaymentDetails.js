function PaymentDetails() {
  return (
    <div className="pl-10 pb-5">
      <p className="text-2xl pb-10 font-semibold">Confirm and pay</p>
      <div>
        <p className="text-xl pb-2 font-semibold">Enter your Details</p>
        <p>
          We'll be sending tickets to the details below. Booking for a friend?
          Add their details.
        </p>
      </div>
      <form action="" className="pt-5 pr-10">
        <div className="flex w-full">
          <div className="w-1/2 mr-4">
            <label className="">&lt;Full Name&gt;</label>
            <input
              className="p-2  w-full mr-2 outline-gray-300 block mb-4 rounded-lg outline outline-2 focus-within:shadow-lg"
              type="text"
              placeholder="Tickete Inc"
              required
            />
          </div>
          <div className="w-1/2 mr-4">
            <label className="" htmlFor="">
              {" "}
              &lt;Phone Number&gt;
            </label>
            <input
              className="p-2 w-full mr-2 outline-gray-300 block mb-4 rounded-lg outline outline-2 focus-within:shadow-lg"
              type="number"
              placeholder="+85 2345345678"
              required
            />
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-1/2 mr-4">
            <label className="">&lt;Full Name&gt;</label>
            <input
              className="p-2  w-full mr-2 outline-gray-300 block mb-4 rounded-lg outline outline-2 focus-within:shadow-lg"
              type="text"
              placeholder="hi@tickete.com"
              required
            />
          </div>
          <div className="w-1/2 mr-4 relative">
            <label className="" htmlFor="">
              {" "}
              &lt;Full Name&gt;
            </label>
            <input
              className="p-2 w-full mr-2 outline-red-500 block mb-4 rounded-lg outline outline-2 focus-within:shadow-lg"
              type="text"
              placeholder="hi@tickete.com"
              required
            />
            <p className="text-red-500 text-sm absolute left-0 ml-1 mb-0 mt-0">
              &lt;error message&gt;
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PaymentDetails;
