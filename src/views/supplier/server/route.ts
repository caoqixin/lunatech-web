import { DATABASE_ID, SUPPLIER_ID } from "@/config/config";
import { SupplierCategories } from "@/views/supplier/types";
import { sessionMiddleware } from "@/middleware/session-middleware";
import { supplierEnumSchema } from "@/views/supplier/schema/supplier.schema";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { ID, Query } from "node-appwrite";
import { z } from "zod";

const app = new Hono()
  .get(
    "/",
    sessionMiddleware,
    zValidator(
      "query",
      z.object({
        search: z.string().nullish(),
        categories: z
          .union([
            z.array(z.nativeEnum(SupplierCategories)),
            z.nativeEnum(SupplierCategories),
          ])
          .nullish()
          .transform((value) => {
            // Convert single value to array or return empty array if null/undefined
            if (value === null || value === undefined) return [];
            return Array.isArray(value) ? value : [value];
          }),
      })
    ),
    async (c) => {
      const { search, categories } = c.req.valid("query");

      console.log(categories, 111);

      const databases = c.get("databases");

      const query = [Query.orderAsc("name")];

      if (search) {
        query.push(Query.search("name", search));
      }

      if (categories && categories.length > 0) {
        query.push(Query.contains("categories", categories));
      }

      const suppliers = await databases.listDocuments(
        DATABASE_ID,
        SUPPLIER_ID,
        query
      );

      return c.json({ data: suppliers });
    }
  )
  .get("/:name", sessionMiddleware, async (c) => {
    const databases = c.get("databases");

    const name = c.req.param("name");
    const supplier = await databases.listDocuments(DATABASE_ID, SUPPLIER_ID, [
      Query.contains("name", name),
    ]);

    return c.json({ data: supplier });
  })
  .post(
    "/",
    sessionMiddleware,
    zValidator("json", supplierEnumSchema),
    async (c) => {
      const databases = c.get("databases");

      const { name, url, categories } = c.req.valid("json");

      console.log(categories);

      const supplier = await databases.createDocument(
        DATABASE_ID,
        SUPPLIER_ID,
        ID.unique(),
        {
          name,
          url,
          categories,
        }
      );

      return c.json({ data: supplier });
    }
  );

export default app;
