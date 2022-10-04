import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "here we go",
  });
});

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
