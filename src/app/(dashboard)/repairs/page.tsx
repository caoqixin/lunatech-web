import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">维修管理</div>
        <div>
          <Button variant="secondary">创建维修</Button>
        </div>
      </div>

      <div className="flex-1 w-full border rounded-lg">
        <div className="h-full flex flex-col overflow-auto p-4">
          <div>data filter</div>
          <Separator className="my-2" />
          <div>tabel</div>
        </div>
      </div>
    </div>
  );
}
