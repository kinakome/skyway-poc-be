import express, { Application, Request, Response } from "express";
import { createRouter } from "./router";

const app: Application = express();
const PORT = 7072;

try {
  app.listen(PORT, () => {
    console.log(`server running at://localhost:${PORT}`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}

app.use("/", createRouter()); // add
