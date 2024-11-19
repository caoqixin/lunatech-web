import { Option } from "@/components/custom/multiple-selector";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SupplierCategoryOptionsEnum } from "@/config/supplier_descriptions";
import { ListCheckIcon } from "lucide-react";
import * as React from "react";
import { useSupplierFilters } from "../hooks/use-supplier-filters";

interface DataFiltersProps {}

export const DataFilters = ({}: DataFiltersProps) => {
  const [{ search, categories }, setFilters] = useSupplierFilters();

  const toggleSelected = (key: keyof typeof SupplierCategoryOptionsEnum) => {
    const isChecked = categories.some(
      (v) => v == SupplierCategoryOptionsEnum[key]
    );

    if (isChecked) {
      // 移除
      setFilters({
        categories: categories.filter(
          (prev) => prev != SupplierCategoryOptionsEnum[key]
        ),
      });
    } else {
      // 添加

      setFilters({
        categories: [...categories, SupplierCategoryOptionsEnum[key]],
      });
    }
  };

  const toggleAllSelected = () => {
    setFilters({
      categories:
        categories.length === Object.keys(SupplierCategoryOptionsEnum).length
          ? []
          : [...Object.values(SupplierCategoryOptionsEnum)],
    });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full lg:w-auto h-8" asChild>
          <Button variant="outline" className="flex items-center pr-2">
            <ListCheckIcon className="size-4" />
            供应商类型
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuCheckboxItem
            onClick={toggleAllSelected}
            checked={
              categories.length ===
              Object.keys(SupplierCategoryOptionsEnum).length
            }
          >
            所有类型
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          {Object.keys(SupplierCategoryOptionsEnum).map((option) => (
            <DropdownMenuCheckboxItem
              key={option}
              onClick={() =>
                toggleSelected(
                  option as keyof typeof SupplierCategoryOptionsEnum
                )
              }
              checked={
                categories.findIndex(
                  (value) =>
                    value ==
                    SupplierCategoryOptionsEnum[
                      option as keyof typeof SupplierCategoryOptionsEnum
                    ]
                ) >= 0
              }
            >
              {
                SupplierCategoryOptionsEnum[
                  option as keyof typeof SupplierCategoryOptionsEnum
                ]
              }
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
