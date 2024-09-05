import Image from "next/image";

export const Landing = () => {
  return (
    <div className="border max-w-screen-2xl m-auto relative rounded-2xl overflow-hidden">
      <div className="w-[100%] h-[446px] ">
        <Image
          src="/WildFlower.png"
          alt="hoodie image"
          fill
          objectFit="cover"
          // className="rounded-2xl"
        />
      </div>
      <div className="absolute bottom-8 left-8">
        <p className="text-[18px] font-normal">Wildflower Hoodie</p>
        <p className="text-[36px] font-bold">120'000</p>
      </div>
    </div>
  );
};
