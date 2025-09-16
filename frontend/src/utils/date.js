// src/utils/date.js
export default function safeFormatDate(dateString) {
  if (!dateString) return "—"; // return dash if empty/null
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "—"; // invalid date fallback
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
