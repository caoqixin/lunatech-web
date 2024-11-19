"use client";

import { useGetSuppliers } from "@/views/supplier/api/use-get-suppliers";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCreateSupplierModal } from "@/views/supplier/hooks/use-create-supplier";
import { Loader, PlusIcon } from "lucide-react";
import { DataFilters } from "./components/data-filters";
import { useSupplierFilters } from "./hooks/use-supplier-filters";
import { useEffect } from "react";

export const SupplierPage = () => {
  const [{ search, categories }] = useSupplierFilters();

  const { open } = useCreateSupplierModal();

  const {
    data: suppliers,
    isLoading,
    refetch,
  } = useGetSuppliers({
    search,
    categories: categories.length > 0 ? categories : undefined,
  });

  useEffect(() => {
    refetch();
  }, [categories]);

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">供应商列表</div>
        <div>
          <Button onClick={open} className="w-full lg:w-auto">
            <PlusIcon className="size-4" />
            添加
          </Button>
        </div>
      </div>

      <div className="flex-1 w-full border rounded-lg">
        <div className="h-full flex flex-col overflow-auto p-4">
          <DataFilters />
          <Separator className="my-2" />
          {isLoading ? (
            <div className="w-full border rounded-lg h-[200px] flex flex-col items-center justify-center">
              <Loader className="size-5 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <div>{JSON.stringify(suppliers)}</div>
          )}
        </div>
      </div>
    </div>
  );
};
