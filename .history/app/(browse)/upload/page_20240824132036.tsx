"use client";
import { Navbar } from "./_components/navbar";
import { Upload } from "./_components/upload";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Page() {
  const [file, setCSV] = useState<File | undefined>();
  const [data, setData] = useState<unknown[][]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<String[][]>([[]]);

  // console.log(selectedTags);

  const handleSelect = (index: number, value: string) => {
    setSelectedTags((state) => {
      const modified = [...state];

      for (const val of modified[index]) {
        if (val === value) {
          return state;
        }
      }
      modified[index].push(value);

      return modified;
    });
  };

  const handleRemove = (rowIndex: number, index: number) => {
    setSelectedTags((state) => {
      const modified = [...state];

      modified[rowIndex] = modified[rowIndex].filter(
        (item, idx) => idx != index
      );

      return modified;
    });
  };

  const headings = data && data[0];
  const rows = data && data.slice(1);

  useEffect(() => {
    if (file) {
      setLoading(true);
      Papa.parse(file, {
        complete: (result, file) => {
          const data = result.data as unknown[][];
          setData(data);

          const fills = [...Array(data.length - 1)].map((_, i) => []);

          setSelectedTags(fills);

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
            <h1>Uploads</h1>
          </div>

          <div className="overflow-x-auto bg-background rounded-lg p-4">
            <div className="table  w-full overflow-x-auto border-spacing-y-4 text-muted-foreground">
              <div className="table-header-group overflow-x-auto">
                <div className="table-row overflow-x-auto">
                  {headings?.map((item, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "table-cell font-medium text-lg  px-4 py-2",

                        idx === 0 && "sticky -left-4 z-40 bg-background"
                      )}
                    >
                      {" "}
                      {item as string}
                    </div>
                  ))}
                </div>
              </div>

              <div className="table-row-group space-y-4 overflow-x-auto rounded-xl">
                {rows?.map((item, i) => {
                  const tags = (item[3] as string)
                    .split(",")
                    .map((item) => item.trim());

                  return (
                    <div
                      key={i}
                      className="table-row bg-background-muted overflow-x-auto"
                    >
                      <div
                        className={cn(
                          "text-sm table-cell border-white p-2 sticky -left-4 bg-background-muted z-10 min-w-[4rem]"
                        )}
                      >
                        {item[0] as string}
                      </div>
                      <div className="text-sm table-cell p-2">
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

                      <div className="table-cell text-sm  border-white p-2">
                        {item[2] as string}
                      </div>

                      <div className="table-cell p-2">
                        <Select
                          onValueChange={(value) => handleSelect(i, value)}
                        >
                          <SelectTrigger className="w-[10rem]">
                            <SelectValue placeholder="Select a Tag" />
                          </SelectTrigger>
                          {tags && tags.length > 0 && (
                            <SelectContent>
                              {tags.map((item, idx) => (
                                <SelectItem key={idx} value={item} className="">
                                  {item}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          )}
                        </Select>
                      </div>

                      <div className="p-2 flex gap-x-1 text-background-muted">
                        {selectedTags[i].map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-x-1/2 text-sm font-light bg-purple-500 w-fit px-1 py-1/2 rounded-md"
                          >
                            {item}

                            <X
                              className="w-4 h-4 cursor-pointer"
                              onClick={() => handleRemove(i, idx)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
