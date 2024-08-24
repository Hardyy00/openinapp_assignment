"use client";

import { auth } from "@/auth";
import { Navbar } from "./_components/navbar";
import { Upload } from "./_components/upload";
import { useState } from "react";

export default function Page() {
  const [file, setFile] = useState<File | null>();
  return (
    <div className="h-full flex flex-col">
      <Navbar />

      <div className="flex-1 h-full flex justify-center items-center">
        <Upload />
      </div>
    </div>
  );
}
