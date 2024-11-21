import { SupplierCategories } from "@/views/supplier/types";
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
      parseAsStringEnum(Object.values(SupplierCategories))
    )
      .withDefault([])
      .withOptions({ clearOnDefault: true }),
  });
};
