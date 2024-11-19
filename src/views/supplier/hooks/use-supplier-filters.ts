import { SupplierCategoryOptionsEnum } from "@/config/supplier_descriptions";
import {
  parseAsString,
  useQueryStates,
  parseAsArrayOf,
  parseAsStringEnum,
} from "nuqs";

export const useSupplierFilters = () => {
  return useQueryStates({
    search: parseAsString,
    categories: parseAsArrayOf(
      parseAsStringEnum(Object.values(SupplierCategoryOptionsEnum))
    )
      .withDefault([])
      .withOptions({ clearOnDefault: true }),
  });
};
