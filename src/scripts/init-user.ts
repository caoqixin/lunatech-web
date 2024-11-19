import { config } from "dotenv";
import { Users, Client, ID } from "node-appwrite";

config({ path: ".env.local" });

async function createAdminAccount() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.NEXT_APPWRITE_KEY!);
  const account = new Users(client);

  const res = await account.list();

  const user = res.users.find(
    (value) => value.email == process.env.INIT_ACCOUNT_EMAIL
  );

  if (user) {
    return {
      message: "已存在",
    };
  }

  await account.create(
    ID.unique(),
    process.env.INIT_ACCOUNT_EMAIL!,
    process.env.INIT_ACCOUNT_PHONE!,
    process.env.INIT_ACCOUNT_PASSWORD!,
    process.env.INIT_ACCOUNT_NAME!
  );

  return {
    message: "创建成功",
  };
}

createAdminAccount()
  .then((res) => {
    console.log(res.message);
  })
  .catch((e) => {
    console.log(e);
  });
