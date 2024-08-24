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

  console.log(data);

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
            <table className="border w-full">
              <tr>
                {headings?.map((item, idx) => (
                  <th
                    key={idx}
                    className="font-medium text-lg border border-white"
                  >
                    {" "}
                    {item as string}
                  </th>
                ))}
              </tr>

              <tr>
                {rows?.[0]?.map((item, i) => (
                  // item.map((data, idx) => <td key={idx}>{data as string}</td>)
                  <td key={i} className="font-medium">
                    {item as string}
                  </td>
                ))}
              </tr>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
