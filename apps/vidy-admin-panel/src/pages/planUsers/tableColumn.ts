export const TableColumn = [
  // { id: "account_id", label: "Account ID" },
  { id: "account_name", label: "User" },
  { id: "plan", label: "Plan" },
  { id: "vidys", label: "Vidys" },
  { id: "storage_used", label: "Storage" },
  { id: "hit_limit", label: " ⁠Monthly Hits" },
  { id: "status", label: "Status" },
  { id: "tenure", label: "Tenure" },
  // { id: "type", label: "Type" },
  // { id: "mrr", label: "MRR" },
  // { id: "platforms", label: "Platform(s)" },
  // { id: "current_plan", label: "Plan" },
  // { id: "total_campaigns", label: "Campaigns" },
  // { id: "hits_this_month", label: "Hits" },
  // { id: "last_active_at", label: "Last Active" },
  // { id: "branding", label: "Branding" },
  // { id: "created_at", label: "Created At" },
  // { id: "action", label: "Action" },
] as const;

export type TableColumnId = (typeof TableColumn)[number]["id"];
