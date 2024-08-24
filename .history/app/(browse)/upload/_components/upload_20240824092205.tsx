import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Upload: React.FC = () => {
  return (
    <div className="bg-background p-4 flex flex-col gap-y-8 overflow-y-auto border border white">
      <div className="aspect-video border-dashed border border-gray-400 p-24 space-y-8">
        <div className="flex justify-center">
          <div className="w-5 h-5 relative">
            <Image src={"/excel.svg"} alt="svg" fill />
          </div>
        </div>
        <p>
          Drop your excel sheet here or{" "}
          <button className="text-blue-600">browse</button>{" "}
        </p>
      </div>

      <div>
        <Button variant={"primary"} className="w-full">
          Submit
        </Button>
      </div>
    </div>
  );
};
