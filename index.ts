import { serve } from "https://deno.land/std@0.137.0/http/server.ts";
import data from "./allanswer.json" assert { type: "json" };

function handler(req: Request): Response {
  return new Response(JSON.stringify(data));
}

serve(handler);
