import Image from "next/image";

const data = [
  { img: "/WildFlower.png", title: "Wildflower hoodie", price: 120000 },
  { img: "/WildFlower.png", title: "Wildflower hoodie", price: 120000 },
  { img: "/WildFlower.png", title: "Wildflower hoodie", price: 120000 },
  { img: "/WildFlower.png", title: "Wildflower hoodie", price: 120000 },
  { img: "/WildFlower.png", title: "Wildflower hoodie", price: 120000 },
];
export const Cards = () => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="relative">
          <Image width={0} height={0} alt="card" src={item.img} />
          <p></p>
        </div>
      ))}
    </div>
  );
};
