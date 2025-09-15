const API_BASE_URL = import.meta.env.VITE_API_URL;
  const token = sessionStorage.getItem("token");

async function apiRequest(endpoint, method = "GET", body = null, headers = {}) {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  };
  if (body) config.body = JSON.stringify(body);

  const res = await fetch(`${API_BASE_URL}${endpoint}`, config);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data?.message || "API request failed");
  }
  return data;
}

export const tenantApi = {
  list: () => apiRequest("/tenant-requests", "GET"),
  getById: (id) => apiRequest(`/tenant-requests/${id}`, "GET"),
  c: (id) => apiRequest(`/tenant-requests/users/${id}`, "GET"),
  // ✅ Invite / Add a tenant user
  addTenantUser: (tenantId, email) =>
    apiRequest(`/tenant-requests/add-tenant-user`, "POST", {
      tenantId,
      email, 
    }),
  getUsers: (id) => apiRequest(`/tenant-requests/users/${id}`, "GET"), // 👈 new
  updateStatus: (requestId, action, reviewerId) =>
    apiRequest(`/tenant-requests/review-request`, "PUT", {
      requestId,
      action,
      reviewerId,
    }),
     // ✅ New APIs for user management
  activateUser: (userId, token) =>
    apiRequest(`/tenant-requests/tenant-users/activate/${userId}`, "PUT", null, { Authorization: `Bearer ${token}` }),

  deactivateUser: (userId, token) =>
    apiRequest(`/tenant-requests/tenant-users/deactivate/${userId}`, "PUT", null, { Authorization: `Bearer ${token}` }),

  softDeleteUser: (userId, token) =>
    apiRequest(`/tenant-requests/tenant-users/${userId}`, "DELETE", null, { Authorization: `Bearer ${token}` }),
};
