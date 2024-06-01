import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import { BsSuitcase } from "react-icons/bs";

function Nav() {
  return (
    <div className="bg-white h-14 shadow-2xs flex items-center gap-10 px-7 py-3 text-[#92979B]">
      <Image
        className="ml-auto"
        src="/img/icon.svg"
        alt="alibaba icon"
        width={150}
        height={30}
      />
      <div className="flex text-lg font-bold gap-4">
        <p className="flex flex-row-reverse items-center gap-2">
          مرکز پشتیبانی آنلاین
          <GoQuestion size={20} />
        </p>
        <p className="flex flex-row-reverse items-center gap-2">
          سفرهای من
          <BsSuitcase size={20} />
        </p>
      </div>
      <div className="flex flex-row-reverse items-center gap-2">
        <FaAngleDown />
        User
        <div className="flex relative">
          <FaRegUser size={18} />
          <FaCheckCircle
            color="#28A745"
            size={12}
            className="absolute left-5 bottom-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
