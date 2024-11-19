import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<
  (typeof client.api.suppliers)["$post"],
  200
>;
type RequestType = InferRequestType<(typeof client.api.suppliers)["$post"]>;

export const useCreateSupplier = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      // check if isexists
      const supplier = await client.api.suppliers[":name"]["$get"]({
        param: { name: json.name },
      });

      const isExits = (await supplier.json()).data.total;

      if (isExits > 0) {
        throw new Error("供应商添加失败, 当前供应商已存在");
      }

      const response = await client.api.suppliers["$post"]({ json });

      if (!response.ok) {
        throw new Error("供应商添加失败");
      }

      return await response.json();
    },
    onSuccess: () => {
      toast.success("供应商添加成功");
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  return mutation;
};
