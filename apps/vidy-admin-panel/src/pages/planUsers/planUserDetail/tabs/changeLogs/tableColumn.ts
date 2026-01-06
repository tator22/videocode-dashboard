export const TableColumn = [
  { id: "action", label: "Changes" },
  { id: "changedBy", label: "changed by" },
  { id: "date", label: "date" },
] as const;

export type TableColumnId = (typeof TableColumn)[number]["id"];
