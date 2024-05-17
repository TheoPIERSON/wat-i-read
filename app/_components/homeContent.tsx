import Image from "next/image";
import myPic from "./assets/41rIHIPN+yL.jpg";
import secondPic from "./assets/61U8h+sdNkL.jpg";
import thirdPic from "./assets/818pnDR8JgL.jpg";

export const HomeContent = () => {
  return (
    <div className="flex">
      {" "}
      <Image src={myPic} alt="Picture of the author" />
      <Image src={secondPic} alt="Picture of the author" />
      <Image src={thirdPic} alt="Picture of the author" />
    </div>
  );
};
