import StatusChip from "@/components/StatusChip";
import moment from "moment";
import { FC } from "react";
import { TableColumnId } from "./tableColumn";
import { Text } from "@repo/UI";
import { CONSTANTS } from "@repo/utilities";

interface RenderCellsUiProps {
  row: Record<string, any>;
  el: TableColumnId;
  deleteButtonLoading?: boolean;
  refreshPage?: () => void;
}

const RenderCellsUi: FC<RenderCellsUiProps> = ({ row, el }) => {
  // Table Columns

  // Last Active At
  if (el === "last_active_at") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        {moment(row?.last_active_at).format("DD, MMMM YYYY")}
      </td>
    );
  }

  // Type
  else if (el === "type") {
    return (
      <td style={{ whiteSpace: "nowrap", textTransform: "capitalize" }}>
        {row?.type}
      </td>
    );
  }

  // Name
  else if (el === "account_name") {
    return (
      <td style={{ display: "flex", flexDirection: "column" }}>
        <Text
          containerProps={{
            style: {
              fontSize: "inherit",
              color: "inherit",
              whiteSpace: "nowrap",
            },
          }}
        >
          {row?.account_name}
        </Text>
        <Text
          containerProps={{
            style: {
              fontSize: "inherit",
              color: "inherit",
              whiteSpace: "nowrap",
            },
          }}
        >
          {row?.email}
        </Text>
      </td>
    );
  }

  // // Branding
  // else if (el === "branding") {
  //   return <td>{row?.branding ? "On" : "Off"}</td>;
  // }

  // Status
  else if (el === "status") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        <StatusChip status={row?.status} />
      </td>
    );
  }

  // Platforms
  else if (el === "platforms") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        {row.platforms.map((item: any) => item).join(", ")}
      </td>
    );
  }

  // Storage
  else if (el === "storage_used") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>{`${row.storage_used}/15GB`}</td>
    );
  }

  // Storage
  else if (el === "hits_this_month") {
    return (
      <td
        style={{ whiteSpace: "nowrap" }}
      >{`${row.hits_this_month}/${row?.total_limit}`}</td>
    );
  }

  // MRR
  else if (el === "mrr") {
    return (
      <td
        style={{ whiteSpace: "nowrap" }}
      >{`${CONSTANTS.CURRENCY_SYMBOL}${row?.mrr}`}</td>
    );
  }

  // Default
  else {
    return <td>{el !== undefined && row?.[el] ? row?.[el] : "-"}</td>;
  }
};

export default RenderCellsUi;
