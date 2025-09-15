import express from "express";
import {
  createTenantRequest,
  reviewTenantRequest,
  listReviewedTenantRequests,
  getTenantRequestById,
  registerUserUnderTenant,
  getUsersByTenant,
  createTenantWithAdmin,
  addUserUnderTenant,
  softDeleteTenant,
  getTenantsWithUserCount,
  activateUser,
  deactivateUser,
  softDeleteUser,
  activateTenant,
  deactivateTenant
} from "../controllers/tenant.controller.js";
import { authenticateJWT } from "../middlewares/authenticateJWT.js";
const router = express.Router();

/**
 * ============================
 * ROUTES FOR NORMAL USERS
 * ============================
 */

// User creates a tenant request
router.post("/", createTenantRequest);

// Register user under tenant after approval
router.post("/register-user", registerUserUnderTenant);

/**
 * ============================
 * ROUTES FOR TENANT ADMIN
 * ============================
 */

// Add a user under their own tenant
router.post("/add-tenant-user", authenticateJWT, addUserUnderTenant);

// Get users belonging to a tenant
router.get("/users/:tenantId", authenticateJWT, getUsersByTenant);

// Tenant admin user management
router.put("/tenant-users/activate/:userId", authenticateJWT, activateUser);
router.put("/tenant-users/deactivate/:userId", authenticateJWT, deactivateUser);
router.delete("/tenant-users/:userId", authenticateJWT, softDeleteUser);


/**
 * ============================
 * ROUTES FOR SUPER ADMIN
 * ============================
 */

// Review tenant requests
router.put("/review-request", authenticateJWT, reviewTenantRequest);

// List all reviewed tenant requests
router.get("/", authenticateJWT, listReviewedTenantRequests);

// Get tenants with user count
router.get("/all-tenant", authenticateJWT, getTenantsWithUserCount);

// Create tenant directly
router.post("/create-tenant", authenticateJWT, createTenantWithAdmin);

// Soft delete tenant
router.delete("/:id", authenticateJWT, softDeleteTenant);

// Get a tenant request by ID
router.get("/:id", authenticateJWT, getTenantRequestById);

// Activate a tenant
router.put("/activate/:id", authenticateJWT, activateTenant);

// Deactivate a tenant  
router.put("/deactivate/:id", authenticateJWT, deactivateTenant);

export default router;
