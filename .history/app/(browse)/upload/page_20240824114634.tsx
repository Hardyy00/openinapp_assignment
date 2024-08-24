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
            <table className="border w-full table-auto border-spacing-2 overflow-x-auto">
              <tr className="">
                {headings?.map((item, idx) => (
                  <th
                    key={idx}
                    className="font-medium text-lg border border-white px-4 py-2"
                  >
                    {" "}
                    {item as string}
                  </th>
                ))}
              </tr>

              {rows?.map((item, i) => (
                <tr key={i}>
                  <td>{item[0] as string}</td>
                  <td>
                    {
                      <a
                        href={("www." + item[1]) as string}
                        target="_blank"
                        className="text-blue-600"
                      >
                        {item[1] as string}
                      </a>
                    }
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
