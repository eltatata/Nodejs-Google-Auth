import "dotenv/config";
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import { create } from "express-handlebars";
import "./utils/auth.js";

import indexRouter from "./routes/index.route.js";

const app = express();
const PORT = 3000;

const hbs = create({
  extname: ".hbs",
  partialsDir: ["./src/views/components"]
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./src/views");

app.use(session({ secret: 'tu_secreto', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", indexRouter);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}/api`);
});
