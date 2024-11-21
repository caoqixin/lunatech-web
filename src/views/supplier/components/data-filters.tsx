import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SupplierCategories,
  supplierCategoriesKey,
} from "@/views/supplier/types";
import { ListCheckIcon } from "lucide-react";
import * as React from "react";
import { useSupplierFilters } from "../hooks/use-supplier-filters";

interface DataFiltersProps {}

export const DataFilters = ({}: DataFiltersProps) => {
  const [{ search, categories }, setFilters] = useSupplierFilters();

  const toggleSelected = (key: supplierCategoriesKey) => {
    const isChecked = categories.some((v) => v == SupplierCategories[key]);

    if (isChecked) {
      // 移除
      setFilters({
        categories: categories.filter(
          (prev) => prev != SupplierCategories[key]
        ),
      });
    } else {
      // 添加

      setFilters({
        categories: [...categories, SupplierCategories[key]],
      });
    }
  };

  const toggleAllSelected = () => {
    setFilters({
      categories:
        categories.length === Object.keys(SupplierCategories).length
          ? []
          : [...Object.values(SupplierCategories)],
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
              categories.length === Object.keys(SupplierCategories).length
            }
          >
            所有类型
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          {Object.keys(SupplierCategories).map((option) => (
            <DropdownMenuCheckboxItem
              key={option}
              onClick={() => toggleSelected(option as supplierCategoriesKey)}
              checked={
                categories.findIndex(
                  (value) =>
                    value == SupplierCategories[option as supplierCategoriesKey]
                ) >= 0
              }
            >
              {SupplierCategories[option as supplierCategoriesKey]}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
