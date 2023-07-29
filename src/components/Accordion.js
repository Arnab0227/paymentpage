import { useState } from "react";
import { items } from "./FrequentlyAskedQuestions";
import { GoDash, GoPlus } from "react-icons/go";
import { PiChatsTeardropFill } from "react-icons/pi";

function Accordion() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((current) => {
      if (current === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl">{isExpanded ? <GoDash /> : <GoPlus />}</span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3  border-t border-grey-300 item-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          <div className="font-semibold">{item.question}</div>
          {icon}
        </div>
        {isExpanded && <div className=" p-5">{item.answer}</div>}
      </div>
    );
  });
  return (
    <div className="p-10 pt-0 pb-5">
      <div className="border-t border-b justify-between flex">
        <div className="pt-10 w-2/3">
          <p className="text-2xl font-semibold">Frequently asked questions</p>
          <div className="pt-10">{renderedItems}</div>
        </div>
        <div className="flex justify-end p-10 ">
          <div className="w-80 h-40 px-10 border bg-rose-100 rounded-md">
            <div className="flex justify-between  pt-5">
              <p className="text-rose-800">Need help?</p>
              <div className="text-2xl text-rose-800">
                <PiChatsTeardropFill />
              </div>
            </div>
            <p className="pb-5 text-rose-800">we're here to help, 24*7</p>
            <button className="border p-2 rounded-lg border-rose-800 cursor-pointer text-rose-800">
              Chat with us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
