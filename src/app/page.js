import FormSearch from "@/template/FormSearch";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-full gap-[15px] px-[30px] py-[26px] bg-main">
      <Image src="/logo.png" width={72} height={83} alt="" className="self-center my-auto" />
      <FormSearch buttonClass="bg-[rgba(255,255,255,0.2)]" />
    </div>
  );
}
