import { ThemeToggle } from "@/components/theme-toggle";
import { CircleSlash2 } from "lucide-react";
import Image from "next/image";

export const Intro: React.FC = () => {
  return (
    <div className="flex-[0.5] p-8 hidden lg:block">
      <div className="p-8 bg-blue-600 h-full rounded-3xl">
        <div className="p-4 bg-blue-700 h-full rounded-3xl flex flex-col gap-y-4 justify-between">
          <div className="p-4 flex items-center bg-white rounded-full w-[9rem] space-x-6">
            <CircleSlash2 className=" fill-blue-600 h-7 w-7" />
            <h1 className="text-black font-extrabold text-2xl ">Base</h1>
          </div>

          <div className="w-[80%]">
            <p className="text-3xl font-bold text-wrap leading-relaxed text-white">
              Generate Detailed reports with just one click
            </p>
          </div>

          <div className=" flex h-[24rem]">
            <div className="flex-[0.3] self-end pb-16">
              <ThemeToggle className="w-[8rem]" />
            </div>
            <div className="flex-1 h-[70%] self-end  relative">
              {/* <div className="h-[70%]"> */}
              {/* <div className=" relative h-[70%] "> */}
              <Image src={"/auth.svg"} fill alt="svg" />
              {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
