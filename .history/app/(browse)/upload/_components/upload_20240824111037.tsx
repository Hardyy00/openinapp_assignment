"use client";

import { Button } from "@/components/ui/button";
import { Loader, UploadIcon } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, HtmlHTMLAttributes, useRef, useState } from "react";

interface UploadProps {
  setCSV: (value: File | undefined) => void;
  isLoading: boolean;
}

export const Upload: React.FC<UploadProps> = ({ setCSV, isLoading }) => {
  const [file, setFile] = useState<File | undefined>();
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e?.target?.files?.[0]);
  };

  const handleRemove = () => {
    setFile(undefined);
  };

  const submitFile = () => {
    setCSV(file);
  };

  return (
    <div className="bg-background p-4 flex flex-col gap-y-8 overflow-y-auto">
      <div className="aspect-video border-dashed border border-gray-400  space-y-8 p-8 w-[30rem] flex flex-col items-center justify-center">
        <div className="flex justify-center">
          <div className="w-10 h-10 relative">
            <Image src={"/excel.svg"} alt="svg" fill />
          </div>
        </div>
        {!file && (
          <p className="text-muted-foreground">
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
        )}

        {file && (
          <div className="flex flex-col items-center space-y-4">
            <p>{file.name}</p>

            <button className="text-red-600" onClick={handleRemove}>
              Remove
            </button>
          </div>
        )}
      </div>

      <div>
        <Button
          variant={"primary"}
          className="w-full space-x-4"
          onClick={submitFile}
        >
          {!isLoading && (
            <>
              {" "}
              <UploadIcon />
              <p> Upload</p>{" "}
            </>
          )}

          {isLoading && <Loader className="animate-spin" />}
        </Button>
      </div>
    </div>
  );
};
