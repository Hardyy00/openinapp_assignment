import { Button } from "@/components/ui/button";

export const Upload: React.FC = () => {
  return (
    <div className="bg-background p-4 flex flex-col gap-y-8">
      <div className="aspect-video border-dashed border border-gray-400 p-24">
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
