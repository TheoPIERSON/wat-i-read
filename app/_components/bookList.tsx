import Image from "next/image";
import thirdPic from "./assets/41rIHIPN+yL.jpg";
import book1 from "./assets/61U8h+sdNkL.jpg";
import book2 from "./assets/61bbx8pwPBL.jpg";
import book3 from "./assets/818pnDR8JgL.jpg";
import book4 from "./assets/81Dpla0kKSL.jpg";
import book5 from "./assets/81P8IMpd7PL.jpg";
import book6 from "./assets/9781473233959.webp";
import book7 from "./assets/9782344020685-001-T.jpeg";

export const BookList = () => {
  return (
    <div className="grid grid-cols-4 gap-4 pl-20 pr-20">
      <Image className="object-cover w-full h-full" src={thirdPic} alt="Third image" />
      <Image className="object-cover w-full h-full" src={book1} alt="First image" />
      <Image className="object-cover w-full h-full" src={book2} alt="Second image" />
      <Image className="object-cover w-full h-full" src={book3} alt="First image" />
      <Image className="object-cover w-full h-full" src={book4} alt="Second image" />
      <Image className="object-cover w-full h-full" src={book5} alt="Third image" />
      <Image className="object-cover w-full h-full" src={book7} alt="Second image" />{" "}
    </div>
  );
};
