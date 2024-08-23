import { Button } from "@/components/ui/button";

export const Upload: React.FC = () => {
  return (
    <div className="bg-background p-4">
      <div className="aspect-video border-dashed"></div>

      <div>
        <Button variant={"primary"}>Submit</Button>
      </div>
    </div>
  );
};
