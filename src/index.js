import express from "express";
import { join, __dirname } from "./utils/index.js";
import genericRoute from "./routes/generic.route.js";
import authRoutes from './routes/auth.routes.js';
import cors from "cors";
import dotenv from "dotenv";
import { collection } from "firebase/firestore";
dotenv.config();

//settings
const app = express();
app.use(cors())//cors, para todos
app.set("PORT", process.env.PORT || 3000);

// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//routes
//get
app.get("/", (req, res) => {
  res.json({ title: "Servidor Funcionando", collection });
});

app.use("/api", genericRoute);
app.use('/auth', authRoutes);

//404
app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no existente"
  });
});

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
