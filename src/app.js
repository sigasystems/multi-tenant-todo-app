import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import cors from "cors";
import tenantRequestRoutes from "./routes/tenantRequest.routes.js";
import authRouter from "./routes/auth.Routes.js";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();

const app = express();

// app.use(cors()); // Enable CORS for all routes

app.use(
    cors({
        origin: "*", // allow frontend
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);

app.use(express.json()); // For JSON body parsing
app.use(express.urlencoded({ extended: true })); // For URL-encoded body parsing

// app.get("/", (req, res) => {
//     res.send("Hello from the backend!");
// });

app.use("/tenant-requests", tenantRequestRoutes);
app.use("/api/auth", authRouter); // Mount the auth routes
app.use("/api/todos", todoRoutes); // Mount the todo routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log("✅ Database connected...");
    } catch (error) {
        console.log(error);
    }
    console.log(`🚀 Server running on port ${PORT}`);
});

export default app;
