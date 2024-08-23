import { Button } from "@/components/ui/button";

export const Upload: React.FC = () => {
  return (
    <div className="bg-background p-4 flex flex-col gap-y-8">
      <div className="aspect-video border-dashed border border-gray-400 w-[10rem] h-[10rem]">
        hii
      </div>

      <div>
        <Button variant={"primary"}>Submit</Button>
      </div>
    </div>
  );
};
