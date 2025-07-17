import express from "express";
import { join, __dirname } from "./utils/index.js";
import genericRoute from "./routes/generic.route.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

//settings
const app = express();
app.use(cors())//cors, para todos
app.set("PORT", process.env.PORT);

// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.json({ title: "Servidor Funcionando" });
});
app.use("/api", genericRoute);
//404
app.use((req, res, next) => {
  res.status(404).json({
    error: "Ruta no existente"
  });
});

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
