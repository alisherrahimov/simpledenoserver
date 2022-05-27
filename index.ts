import { connectDB } from "./db.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";
import { Bot, Telegram } from "https://deno.land/x/telegram@v0.1.1/mod.ts";
const bot = new Bot("5259090349:AAHQJzbGx-_mE1dmHec1IbP8F97t2ByIdXk");
bot.launch({
  webhook: {
    domain: "https://simpledenoserver.deno.dev",
    path: "/",
    port: 5000,
  },
});
bot.on("message", async (ctx) => {
  if ("text" == ctx.message?.text) {
    ctx.reply("asdasdas");
  }
});
const app = new Application();
app.use(oakCors());
app.use((ctx) => {
  ctx.response.body = "Hello world";
});
app
  .listen({ port: 5000 })
  .then((res) => {
    console.log(res);
    console.log("server is running on port 5000");
  })
  .catch((err) => {
    console.log(err);
  });
