export const TableColumn = [
  // { id: "account_id", label: "Account ID" },
  { id: "account_name", label: "Name" },
  { id: "type", label: "Type" },
  { id: "mrr", label: "MRR" },
  // { id: "platforms", label: "Platform(s)" },
  // { id: "current_plan", label: "Plan" },
  { id: "status", label: "Status" },
  { id: "total_campaigns", label: "Campaigns" },
  // { id: "storage_used", label: "Storage" },
  // { id: "hits_this_month", label: "Hits" },
  { id: "last_active_at", label: "Last Active" },
  // { id: "branding", label: "Branding" },
  // { id: "created_at", label: "Created At" },
  // { id: "hit_limit", label: "Hit Limit" },
  // { id: "action", label: "Action" },
] as const;

export type TableColumnId = (typeof TableColumn)[number]["id"];
