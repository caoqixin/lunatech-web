import { SupplierCategories } from "@/views/supplier/types";
import { z } from "zod";

export const optionSchema = z.object({
  label: z.string(),
  value: z.string(),
  disable: z.boolean().optional(),
  checked: z.boolean().optional(),
});

export const supplierSchema = z.object({
  name: z.string().trim().min(1, "请输入供应商名称"),
  url: z.string().trim(),
  description: z.array(optionSchema).optional(),
});

export const supplierEnumSchema = z.object({
  name: z.string().trim().min(1, "请输入供应商名称"),
  url: z.string().trim(),
  categories: z.nativeEnum(SupplierCategories).array().optional(),
});

export type SupplierEnum = z.infer<typeof supplierEnumSchema>;
export type Supplier = z.infer<typeof supplierSchema>;
