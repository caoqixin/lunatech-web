import { Hono } from "hono";
import { handle } from "hono/vercel";
import auth from "@/views/auth/server/route";
import supplier from "@/views/supplier/server/route";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({ hello: "hello world" });
});

const routes = app.route("/auth", auth).route("/suppliers", supplier);

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
