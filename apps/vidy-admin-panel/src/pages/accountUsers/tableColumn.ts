export const TableColumn = [
  {
    id: "account",
    label: "Account",
  },
  {
    id: "status",
    label: "Status",
  },
  {
    id: "billing_source",
    label: "Billing Source",
  },
  {
    id: "mrr",
    label: "MRR ($/mo)",
  },
  {
    id: "renewal_date",
    label: "Renewal Date",
  },
  {
    id: "payment_method",
    label: "Payment Method",
  },
  {
    id: "limit_summary",
    label: "Limit Summary",
  },
  {
    id: "usage_this_period",
    label: "Usage This Period",
  },
  {
    id: "actions",
    label: "Actions",
  },
] as const;

export type TableColumnId = (typeof TableColumn)[number]["id"];
