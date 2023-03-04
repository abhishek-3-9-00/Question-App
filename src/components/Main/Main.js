import { MathJax } from "better-react-mathjax";
import React, { useEffect, useState } from "react";
const Main = () => {
  const [data, setData] = useState("");
  const [questionID] = useState([
    "AreaUnderTheCurve_901",
    "BinomialTheorem_901",
    "DifferentialCalculus2_901",
  ]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch(
      `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${questionID[counter]}`
    )
      .then((res) => res.json())
      .then((data) => setData(data[0].Question))
      .catch((err) => console.log(err.message));
  }, [counter, questionID]);

  return (
    <div name="main" className="h-screen w-full bg-gradient-to-br from-[#8EC5FC] to-[#E0C3FC]  ">
    
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-col">
      
        <div className="text-gray-900 font-semibold text-xl border-b-4 border-gray-500 leading-loose">
          Here is the Question of 
          <span className="font-bold"> {questionID[counter].split("_")[0]}</span>
        </div>
        <br />
        <br />
        <div className="w-full h-[200px] flex items-center text-center bg-slate-400 rounded-lg ">
          <div className="text-gray-900 text-xl items-center text-center mx-auto">
            <MathJax>{data}</MathJax>
          </div>
        </div>
        <div
          className="flex flex-row gap-5 mt-5"
        >
          <button
            className="text-gray-800 text-xl font-bold w-fit px-6 py-3 my-2 flex items-center justify-center  rounded-md bg-gradient-to-r from-violet-300 via-pink-400 to-violet-900 cursor-pointer"
            onClick={() => {
              if (counter === 0) {
                setCounter(0);
              } else {
                setCounter(counter - 1);
              }
            }}
          >
            Previous
          </button>
          <button
            className="text-gray-800 text-xl font-bold w-fit px-6 py-3 my-2 flex items-center justify-center  rounded-md bg-gradient-to-r from-violet-300 via-pink-400 to-violet-900 cursor-pointer"
            onClick={() => {
              if (counter === questionID.length - 1) {
                setCounter(questionID.length - 1);
              } else {
                setCounter(counter + 1);
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
