import StatusChip from "@/components/StatusChip";
import { Text } from "@repo/UI";
import { formatKB, getUsageState } from "@repo/utilities";
import { FC } from "react";
import classes from "./style.module.css";
import { TableColumnId } from "./tableColumn";

interface RenderCellsUiProps {
  row: Record<string, any>;
  el: TableColumnId;
  deleteButtonLoading?: boolean;
  refreshPage?: () => void;
}

const RenderCellsUi: FC<RenderCellsUiProps> = ({ row, el }) => {
  // Variables
  const style = {
    fontSize: "inherit",
    color: "inherit",
    whiteSpace: "nowrap",
  };
  const vidyColors = getUsageState(row?.vidys, row?.total_vidy);
  const storageColors = getUsageState(row?.storage_used, row?.total_storage);

  // Last Active At
  // if (el === "last_active_at") {
  //   return (
  //     <td style={{ whiteSpace: "nowrap" }}>
  //       {moment(row?.last_active_at).format("DD, MMMM YYYY")}
  //     </td>
  //   );
  // }

  // Type
  // else if (el === "type") {
  //   return (
  //     <td style={{ whiteSpace: "nowrap", textTransform: "capitalize" }}>
  //       {row?.type}
  //     </td>
  //   );
  // }

  // Name
  if (el === "account_name") {
    return (
      <td style={{ display: "flex", flexDirection: "column" }}>
        <Text
          containerProps={{
            style,
          }}
        >
          {row?.account_name}
        </Text>
        <Text
          containerProps={{
            style,
          }}
        >
          {row?.email}
        </Text>
      </td>
    );
  }

  // Vidys
  else if (el === "vidys") {
    return (
      <td
        style={{
          color: vidyColors.color,
        }}
      >{`${row?.vidys}/${row?.total_vidy}`}</td>
    );
  }

  // Storage
  else if (el === "storage_used") {
    return (
      <td
        style={{ whiteSpace: "nowrap", color: storageColors.color }}
      >{`${formatKB(row.storage_used)}/${formatKB(row?.total_storage)}}`}</td>
    );
  }

  // Storage
  else if (el === "hit_limit") {
    return (
      <td
        style={{ whiteSpace: "nowrap" }}
      >{`${row.hits_this_month}/${row?.total_limit}`}</td>
    );
  }

  // Status
  else if (el === "status") {
    return (
      <td className={classes.statusCell}>
        <StatusChip status={row?.status} />
      </td>
    );
  }

  // // Branding
  // else if (el === "branding") {
  //   return <td>{row?.branding ? "On" : "Off"}</td>;
  // }

  // // Platforms
  // else if (el === "platforms") {
  //   return (
  //     <td style={{ whiteSpace: "nowrap" }}>
  //       {row.platforms.map((item: any) => item).join(", ")}
  //     </td>
  //   );
  // }

  // MRR
  // else if (el === "mrr") {
  //   return (
  //     <td
  //       style={{ whiteSpace: "nowrap" }}
  //     >{`${CONSTANTS.CURRENCY_SYMBOL}${row?.mrr}`}</td>
  //   );
  // }

  // Default
  else {
    return <td>{el !== undefined && row?.[el] ? row?.[el] : "-"}</td>;
  }
};

export default RenderCellsUi;
