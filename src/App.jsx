import axios from "axios";
import { ReactComponent as Dice } from "./assets/icon-dice.svg";
import { BsPauseFill } from "react-icons/bs";
import { useEffect, useState } from "react";

function App() {
  const [id, setId] = useState("#117");
  const [advice, setAdvice] = useState(
    "It is easy to sit up and take notice, what's difficult is getting up and taking action."
  );

  useEffect(() => {
    getAdvice();
  }, []);

  async function getAdvice() {
    const res = await await axios.get("	https://api.adviceslip.com/advice");

    const slip = res.data.slip;
    setId(slip.id);
    setAdvice(slip.advice);
  }

  return (
    <div className="bg-[#1f2632] w-full h-screen flex justify-center items-center ">
      <div className=" bg-[#323a49] px-[2rem] py-[3rem] h-auto w-[90%]  md:max-w-[550px] rounded-xl flex items-center flex-col overflow-x-hidden-hidden relative">
        <p className="tracking-[0.3rem] text-[#52ffa8] uppercase pb-8 ">
          Advice #{id}
        </p>
        <h2 className=" text-[1.25rem] md:text-[1.75rem] max-w-[98%] text-[#cee3e9] text-center pb-8  ">
          "{advice}"
        </h2>
        <div className="flex gap-4 w-full mb-10 justify-center items-center">
          <div className="w-full h-[1px] bg-[#cee3e9]/20 "></div>
          <BsPauseFill className="text-[#cee3e9] w-[5rem] h-[5rem]" />
          <div className="w-full h-[1px]  bg-[#cee3e9]/20"></div>
        </div>

        <button
          onClick={getAdvice}
          className=" absolute bottom-[-45px] bg-[#52ffa8] p-8 mt-4 rounded-full flex items-center justify-center hover:shadow-[0_0_60px_10px_#52ffa8] cursor-pointer  "
        >
          <Dice />
        </button>
      </div>
    </div>
  );
}

export default App;
