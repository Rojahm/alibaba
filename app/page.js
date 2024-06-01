import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { FaHeadset } from "react-icons/fa6";
import { BsFillSuitcaseFill } from "react-icons/bs";

export default function Home() {
  return (
    <main className="text-[#4b5259] flex flex-col items-center py-8 min-h-[65vh]">
      <div className="flex justify-center gap-5 min-w-full">
        <div className="bg-white w-[20%] rounded-lg border px-5">
          <div className="flex items-center gap-2 py-4 px-2 ">
            <FaUser size={18} />
            <p className="text-lg">حساب کاربری</p>
          </div>
          <hr />
          <div className="flex items-center gap-2 py-4 px-2 ">
            <BsFillSuitcaseFill size={18} />
            <p className="text-lg">سفرهای من</p>
          </div>
          <hr />
        </div>
        <div className="bg-white w-[75%] rounded-lg border-1 flex flex-col p-5">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold flex gap-3">
              <FaHeadset />
              درخواست های پشتیبانی
            </div>
            <div className="text-[#097CDC] flex items-center gap-2">
              <AiOutlinePlus />
              ایجاد درخواست جدید
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/img/empty-message-1695fd8d.svg"
              width={200}
              height={200}
              alt="empty inbox"
            />
          </div>
          <div className="flex flex-col gap-4 m-auto items-center w-[60%] ">
            <h2 className="font-bold text-lg">
              صندوق درخواست‌های پشتیبانی شما خالی است.
            </h2>
            <p className="text-center">
              اگر سوال یا مشکلی دارید می توانید با ایجاد درخواست پشتیبانی در
              سریعترین زمان ممکن آن را پیگیری کنید.
            </p>
            <button className="bg-[#097CDC] text-white w-52 py-3 text-lg rounded-lg">
              ایجاد درخواست جدید
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
