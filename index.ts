import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";
import data from "./allanswer.json" assert { type: "json" };
const app = new Application();
app.use(oakCors());
app.use(async (ctx) => {
  ctx.response.body = data;
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
