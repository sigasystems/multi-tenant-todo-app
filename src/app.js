import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import tenantRequestRoutes from "./routes/tenantRequest.routes.js";
import authRouter from "./routes/auth.Routes.js";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();

const app = express();
const allowedOrigins = [
  "https://dnb.sigasystems.com",
  "https://sigasystems.com",
  "https://www.sigasystems.com", // add if needed
  "http://localhost:5173"
];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  credentials: true,
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ 4. Routes
app.use("/api/tenant-requests", tenantRequestRoutes);
app.use("/api/auth", authRouter);
app.use("/api/todos", todoRoutes);

// (optionally) 5. Global error handler to catch 400/500
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).json({ error: err.message });
});

export default app;
