"use client";
import { Navbar } from "./_components/navbar";
import { Upload } from "./_components/upload";
import { useEffect, useState } from "react";
import Papa from "papaparse";

export default function Page() {
  const [file, setCSV] = useState<File | undefined>();
  const [data, setData] = useState<unknown[][]>();
  const [loading, setLoading] = useState<boolean>(false);

  const headings = data && data[0];
  const rows = data && data.slice(1);

  useEffect(() => {
    if (file) {
      setLoading(true);
      Papa.parse(file, {
        complete: (result, file) => {
          setData(result.data as unknown[][]);
          setLoading(false);
        },
      });
    }
  }, [file]);

  return (
    <div className="h-full">
      <Navbar />

      <div className="h-[35rem] flex justify-center items-center">
        <Upload setCSV={setCSV} isLoading={loading} />
      </div>

      {data && (
        <div className="py-4 px-8 font-bold text-2xl space-y-8">
          <div className="">
            <h1>Upload</h1>
          </div>

          <div className="overflow-x-auto bg-background rounded-lg p-4">
            <div className="table border w-full table-auto border-spacing-2 overflow-x-auto">
              <div className="table-header-group">
                <div className="table-row">
                  {headings?.map((item, idx) => (
                    <div
                      key={idx}
                      className="table-cell font-medium text-lg  px-4 py-2"
                    >
                      {" "}
                      {item as string}
                    </div>
                  ))}
                </div>
              </div>

              <div className="table-row-group space-y-4">
                {rows?.map((item, i) => (
                  <div key={i} className="table-row bg-background-muted">
                    <div className="text-sm table-cell border-white p-2">
                      {item[0] as string}
                    </div>
                    <div className="text-sm table-cell">
                      {
                        <a
                          href={("https://" + item[1]) as string}
                          target="_blank"
                          className="text-blue-600"
                        >
                          {("https://" + item[1]) as string}
                        </a>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
