import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500 ">Hello discord clone</p>
      <Button>Click here</Button>
    </div>
  );
}
