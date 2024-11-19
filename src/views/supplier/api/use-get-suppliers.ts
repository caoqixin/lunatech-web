import { SupplierCategoryOptionsEnum } from "@/config/supplier_descriptions";
import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

interface UseGetSuppliersProps {
  search: string | null;
  categories?: SupplierCategoryOptionsEnum[];
}

export const useGetSuppliers = ({
  search,
  categories,
}: UseGetSuppliersProps) => {
  const query = useQuery({
    queryKey: ["suppliers"],
    queryFn: async () => {
      const response = await client.api.suppliers.$get({
        query: {
          search: search ?? undefined,
          categories: categories,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch suppliers");
      }

      const { data } = await response.json();

      return data;
    },
  });

  return query;
};
