import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Ui/Header";

const Faq = () => {
  return (
    <div>
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <div className="w-full divide-y-2 p-4 shadow-[5px_5px_7px_rgba(0,0,0,0.2),-5px_-5px_9px_rgba(255,255,255,10)] dark:shadow-[10px_10px_20px_rgba(43,43,43),-5px_-5px_9px_rgba(59,59,59)]">
        {faq.map((i, index) => (
          <Section key={index} question={i.question} answer={i.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;

const Section = ({ question, answer }) => {
  const [clickSection, setClickSection] = useState(true);

  return (
    <div
      onClick={() => {
        setClickSection((prev) => !prev);
      }}
      className="w-full my-3 cursor-pointer p-3 rounded-lg hover:bg-[#4E4F50]"
    >
      <div className="flex justify-between ">
        <h1 className="text-3xl">{question}</h1>
        <div className={clickSection ? "rotate-0" : "rotate-180"}>
          <ExpandMoreIcon />
        </div>
      </div>
      <p
        hidden={clickSection}
        className="mt-3 opacity-80 transition-all duration-200"
      >
        {answer}
      </p>
    </div>
  );
};

const faq = [
  {
    question: "An Important Question",
    answer:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sus malesuada lacus ex, sit amet blandit leo lobortis eget",
  },
  {
    question: "Another Important Question",
    answer:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspend malesuada lacus ex, sit amet blandit leo lobortis eget",
  },
  {
    question: "Your Favourite Question",
    answer:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendismalesuada lacus ex, sit amet blandit leo lobortis eget",
  },
  {
    question: "Some Random Question",
    answer:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis malesuada lacus ex, sit amet blandit leo lobortis eget",
  },
  {
    question: "Final Question",
    answer:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget",
  },
];
