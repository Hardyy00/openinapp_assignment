"use client";

import { auth } from "@/auth";
import { Navbar } from "./_components/navbar";
import { Upload } from "./_components/upload";
import { useState } from "react";

export default function Page() {
  const [file, setFile] = useState<File | undefined>();
  return (
    <div className="h-full flex flex-col">
      <Navbar />

      <div className="flex-1 h-full flex justify-center items-center">
        <Upload file={file} setFile={setFile} />
      </div>

      {file && (
        <div className="py-4 px-8 font-bold">
          <div className="">
            <h1>Upload</h1>
          </div>
        </div>
      )}
    </div>
  );
}
