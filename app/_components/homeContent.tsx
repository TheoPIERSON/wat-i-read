import Image from "next/image";
import myPic from "./assets/19664_1.webp";
import secondPic from "./assets/9781473233959.webp";
import thirdPic from "./assets/9782344020685-001-T.jpeg";

export const HomeContent = () => {
  return (
    <div className="grid grid-cols-3 gap-4 h-xxl pl-20 pr-20">
      <div className="relative w-full h-full">
        <Image className="object-cover w-full h-full" src={myPic} alt="First image" layout="fill" />
      </div>
      <div className="relative w-full h-full">
        <Image className="object-cover w-full h-full" src={secondPic} alt="Second image" layout="fill" />
      </div>
      <div className="relative w-full h-full">
        <Image className="object-cover w-full h-full" src={thirdPic} alt="Third image" layout="fill" />
      </div>
    </div>
  );
};
