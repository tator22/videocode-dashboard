export const TableColumn = [
  { id: "account", label: "Account" },
  { id: "changed_by", label: "changed by" },
  { id: "reason", label: "Reason" },
  { id: "change", label: "Changes" },
  { id: "effective_date", label: "Effective Date" },
  { id: "stripe_synced", label: "Stripe Synced" },
  { id: "timestamp", label: "Time Stamp" },
] as const;

export type TableColumnId = (typeof TableColumn)[number]["id"];
