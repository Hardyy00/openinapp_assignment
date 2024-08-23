import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
  return (
    <div className="h-full p-8">
      <div className="p-8 border h-full flex items-center">
        <div className="flex flex-col gap-x-4 w-[30rem]">
          <div className="space-y-2">
            <h1 className="text-foreground font-bold text-3xl">Sign In</h1>
            <p className="text-lg">Sign In to you account</p>
          </div>

          <div className="flex border p-2">
            <Button
              className="flex items-center py-2 px-6 border space-x8"
              variant={"ghost"}
            >
              <div className="w-5 h-5 relative">
                <Image src={"/google.svg"} alt="svg" fill />
              </div>

              <div>
                <p>Google</p>
              </div>
            </Button>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
}
