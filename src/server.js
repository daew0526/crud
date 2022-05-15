'use strick';

import express from "express";
import morgan from "morgan";
import router from "./Routers/router";

const app = express();
const PORT = 3000;
const logger = morgan("dev");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);

app.use("/", router);

const handleListen = () => console.log(`http://localhost:${PORT}`);
app.listen(PORT, handleListen);