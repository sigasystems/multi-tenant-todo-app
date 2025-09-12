import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import tenantRequestRoutes from "./routes/tenantRequest.routes.js";
import authRouter from "./routes/auth.Routes.js";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();

const app = express();

app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "https://dnb.sigasystems.com",
            "https://sigasystems.com",
        ],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        credentials: true,
    })
); // Enable CORS for all routes

app.use(express.json()); // For JSON body parsing
app.use(express.urlencoded({ extended: true })); // For URL-encoded body parsing

app.use("/tenant-requests", tenantRequestRoutes);
app.use("/api/auth", authRouter); // Mount the auth routes
app.use("/api/todos", todoRoutes); // Mount the todo routes

export default app;
