require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const MONGO_URI = process.env.MONGO_URI;

const app = express();
//o que vier no body, esta em JSON
app.use(express.json());

// habilita o uso do cors
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true, // Impede acesso do JS ao cookie
      secure: false, // Deve ser 'true' em produção com HTTPS
      sameSite: "lax", // Permite cookies apenas para navegação normal
    },
  })
);

// rotas
app.use("/auth", authRoutes);
app.use("/students", studentRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Conntected to MongoDB");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}. http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error);
    process.exit(1);
  });
