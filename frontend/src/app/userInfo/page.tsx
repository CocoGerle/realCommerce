import Link from "next/link";

const UserInfo = () => {
  return (
    <div className="bg-[#f7f7f7] min-h-[66vh]">
      <div className="flex gap-5 max-w-screen-lg m-auto pt-[104px]">
        <div className="w-[244px]">
          <div className="bg-white py-2 px-4 rounded-3xl cursor-pointer">
            Хэрэглэгчийн хэсэг
          </div>
          <Link href={`orderHistory`}>
            <div className="bg-white py-2 px-4 rounded-3xl">
              {" "}
              Захиалгын түүх
            </div>
          </Link>
        </div>
        <div>
          <div className="w-[620px]">
            <h1 className="text-[#09090B] text-[18px] font-bold border-b-2 border-[#E4E4E7] pb-5">
              Хэрэглэгчийн хэсэг
            </h1>
            <div className="flex flex-col gap-4">
              <div className="mt-5">
                <p>Овог:</p>
                <input className="rounded-2xl w-[100%] py-1 px-3 text-[#71717A] shadow-sm border border-[#E4E4E7]" />
              </div>
              <div>
                <p>Нэр:</p>
                <input className="rounded-2xl w-[100%] py-1 px-3 text-[#71717A] shadow-sm border border-[#E4E4E7]" />
              </div>
              <div>
                <p>Утасны дугаар:</p>
                <input className="rounded-2xl w-[100%] py-1 px-3 text-[#71717A] shadow-sm border border-[#E4E4E7]" />
              </div>
              <div>
                <p>Имэйл хаяг:</p>
                <input className="rounded-2xl w-[100%] py-1 px-3 text-[#71717A] shadow-sm border border-[#E4E4E7]" />
              </div>
              <div>
                <p>Хаяг</p>
                <textarea
                  id="bio"
                  name="bio"
                  rows={4}
                  className="w-[100%] rounded-2xl py-1 px-3 text-[#71717A] shadow-sm border border-[#E4E4E7]"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end mt-4 mb-[156px]">
              <button className="text-white bg-[#2563EB] py-2 px-9 rounded-full">
                Мэдээлэл шинэчлэх
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserInfo;
