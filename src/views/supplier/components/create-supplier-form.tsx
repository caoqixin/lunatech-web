"use client";

import { useCreateSupplier } from "@/views/supplier/api/use-create-supplier";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  Supplier,
  SupplierEnum,
  supplierSchema,
} from "@/views/supplier/schema/supplier.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  SupplierCategoryOptions,
  SupplierCategoryOptionsEnum,
} from "@/config/supplier_descriptions";
import MultipleSelector from "@/components/custom/multiple-selector";

interface CreateSupplierFormProps {
  onCancel?: () => void;
}

export const CreateSupplierForm = ({ onCancel }: CreateSupplierFormProps) => {
  const router = useRouter();
  const { mutate, isPending } = useCreateSupplier();

  const form = useForm<Supplier>({
    resolver: zodResolver(supplierSchema),
    defaultValues: {
      name: "",
      url: "",
      description: [],
    },
  });

  const onSubmit = (values: Supplier) => {
    const finalValues: SupplierEnum = {
      name: values.name,
      url: values.url,
      categories:
        values.description?.map((desc) => {
          return SupplierCategoryOptionsEnum[
            desc.value as keyof typeof SupplierCategoryOptionsEnum
          ];
        }) || [],
    };

    mutate(
      { json: finalValues },
      {
        onSuccess: () => {
          form.reset();
          onCancel?.();
        },
      }
    );
  };

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="flex p-7">
        <CardTitle className="text-xl font-bold">添加供应商</CardTitle>
      </CardHeader>
      <div className="px-7">
        <Separator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>名称</FormLabel>
                    <FormControl>
                      <Input disabled={isPending} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>网站</FormLabel>
                    <FormControl>
                      <Input disabled={isPending} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>供应商分类</FormLabel>
                    <FormControl>
                      <MultipleSelector
                        value={field.value}
                        onChange={field.onChange}
                        defaultOptions={SupplierCategoryOptions}
                        placeholder="选择供应商分类"
                        disabled={isPending}
                        emptyIndicator={
                          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                            没有更多选项
                          </p>
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="py-7">
              <Separator />
            </div>
            <div className="flex items-center justify-between">
              <Button
                type="button"
                size="lg"
                variant="secondary"
                onClick={onCancel}
                disabled={isPending}
                className={cn(!onCancel && "invisible")}
              >
                取消
              </Button>
              <Button type="submit" size="lg" disabled={isPending}>
                添加
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
