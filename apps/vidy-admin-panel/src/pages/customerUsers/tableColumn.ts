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
    id: "mrr",
    label: "MRR ($/mo)",
    enableSorting: true,
  },
  {
    id: "billing_source",
    label: "Billing Source",
  },

  {
    id: "renewal_date",
    label: "Next Invoice",
  },
  {
    id: "limit_summary",
    label: "Usage Snapshot",
  },
  {
    id: "adjust_limit",
    label: "Limit Health",
  },
  {
    id: "tenure",
    label: "Account Age",
  },
  {
    id: "actions",
    label: "Actions",
  },
] as const;

export type TableColumnId = (typeof TableColumn)[number]["id"];
