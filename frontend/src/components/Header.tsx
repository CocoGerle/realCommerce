import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";

export const Header = () => {
  return (
    <header className="bg-black py-[16px] px-[24px] flex justify-between text-white">
      <div className="flex gap-[16px] items-center">
        <Link href={`/`}>
          <Image
            width={32}
            height={32}
            src={"/Pinecone.png"}
            alt="Pinecone logo"
          />
        </Link>
        <Link href={`/category`}>
          <p>Бүтээгдэхүүн</p>
        </Link>
      </div>
      <div className="bg-[#18181B] flex gap-2 items-center py-[8px] px-[16px] rounded-md w-[300px]">
        <FiSearch size={24} />
        <input
          placeholder="Бүтээгдэхүүн  хайх"
          type="search"
          className="bg-transparent text-[#71717A]"
        />
      </div>
      <div className="flex gap-[24px] items-center">
        <FiHeart size={24} />
        <FiShoppingCart size={24} />
        <div className="flex gap-2">
          <button className="border border-[#2563EB] rounded-md py-[8px] px-[12px]">
            Бүртгүүлэх
          </button>
          <button className="bg-[#2563EB] rounded-md py-[8px] px-[12px]">
            Нэвтрэх
          </button>
        </div>
      </div>
    </header>
  );
};
