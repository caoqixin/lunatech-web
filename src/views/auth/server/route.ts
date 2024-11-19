import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { deleteCookie, setCookie } from "hono/cookie";
import { signInSchema } from "@/views/auth/schema/sign-in.schema";
import { createAdminClient } from "@/lib/server/appwrite";
import { AUTH_COOKIE } from "@/config/constants";
import { sessionMiddleware } from "@/middleware/session-middleware";

const app = new Hono()
  .get("/current", sessionMiddleware, (c) => {
    const user = c.get("user");

    return c.json({ data: user });
  })
  .post("/login", zValidator("json", signInSchema), async (c) => {
    const { email, password } = c.req.valid("json");

    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);

    setCookie(c, AUTH_COOKIE, session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      maxAge: 60 * 60 * 24 * 30,
    });

    return c.json(
      {
        success: true,
      },
      201
    );
  })
  .post("/logout", sessionMiddleware, async (c) => {
    const account = c.get("account");
    deleteCookie(c, AUTH_COOKIE);

    await account.deleteSession("current");

    return c.json({
      success: true,
    });
  });

export default app;
