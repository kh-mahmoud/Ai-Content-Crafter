import Image from "next/image";


const Logo = () => {
  return (
    <div className="flex gap-2 cursor-pointer">
       <div className="relative w-8 h-8">
         <Image src={"/logo.svg"} alt={"logo"} fill className="object-contain"/>
       </div>
       <span className="text-[1.5rem] font-bold whitespace-nowrap">Verbi Ai</span>
    </div>
  );
}

export default Logo;
