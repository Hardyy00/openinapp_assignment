"use client";

import { auth } from "@/auth";
import { Navbar } from "./_components/navbar";
import { Upload } from "./_components/upload";
import { useState } from "react";

export default function Page() {
  const [file, setCSV] = useState<File | undefined>();

  console.log(JSON.stringify(file));
  return (
    <div className="h-full">
      <Navbar />

      <div className="h-[35rem] flex justify-center items-center">
        <Upload setCSV={setCSV} />
      </div>

      {file && (
        <div className="py-4 px-8 font-bold text-2xl">
          <div className="">
            <h1>Upload</h1>
          </div>
        </div>
      )}
    </div>
  );
}
