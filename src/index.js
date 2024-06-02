import "dotenv/config";
import "./utils/auth.handler.js";

import express from 'express';
import passport from 'passport';
import session from 'express-session';
import { create } from "express-handlebars";

import authRouter from "./routes/auth.route.js";
import profileRouter from "./routes/profile.route.js";

const app = express();
const PORT = 3000;

const hbs = create({
  extname: ".hbs",
  partialsDir: ["./src/views/components"],
  helpers: {
    eq: function (a, b) { return a === b; }
  }
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./src/views");

app.use(session({ secret: 'tu_secreto', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/profile", profileRouter);

app.get("/", (req, res) => {
  res.render("home")
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});