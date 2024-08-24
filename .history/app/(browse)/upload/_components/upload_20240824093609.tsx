"use client";

import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, HtmlHTMLAttributes, useRef, useState } from "react";

export const Upload: React.FC = () => {
  const [file, setFile] = useState<File | null>();
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e?.target?.files?.[0]);
  };
  return (
    <div className="bg-background p-4 flex flex-col gap-y-8 overflow-y-auto border border-white">
      <div className="aspect-video border-dashed border border-gray-400 p-24 space-y-8">
        <div className="flex justify-center">
          <div className="w-10 h-10 relative">
            <Image src={"/excel.svg"} alt="svg" fill />
          </div>
        </div>
        <p>
          Drop your excel sheet here or{" "}
          <button
            className="text-blue-600"
            onClick={() => ref.current?.click()}
          >
            browse
          </button>{" "}
          <input
            type="file"
            className="hidden"
            ref={ref}
            onChange={handleChange}
          />
        </p>
      </div>

      <div>
        <Button variant={"primary"} className="w-full space-x-4">
          <UploadIcon />
          <p> Upload</p>
        </Button>
      </div>
    </div>
  );
};
