import { Text } from "@repo/UI";
import moment from "moment";
import { FC } from "react";
import { TableColumnId } from "./tableColumn";

interface RenderCellsUiProps {
  row: Record<string, any>;
  el: TableColumnId;
  deleteButtonLoading?: boolean;
  refreshPage?: () => void;
}

const RenderCellsUi: FC<RenderCellsUiProps> = ({ row, el }) => {
  // Variables
  const style = { color: "inherit", fontSize: "inherit" };

  // Stripe Synced
  if (el === "stripe_synced") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        {row?.stripe_synced ? "Yes" : "No"}
      </td>
    );
  }

  // Stripe Synced
  else if (el === "account") {
    return <td style={{ whiteSpace: "nowrap" }}>{row?.account}</td>;
  }

  // Reason
  else if (el === "reason") {
    return <td style={{ whiteSpace: "nowrap" }}>{row?.reason}</td>;
  }

  // Change
  else if (el === "change") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        <Text
          containerProps={{
            style,
          }}
        >
          Campaigns: {row?.change?.campaigns?.old} -{" "}
          {row?.change?.campaigns?.new}
        </Text>
        <Text
          containerProps={{
            style,
          }}
        >
          Storage: {row?.change?.storage_gb?.old} -{" "}
          {row?.change?.storage_gb?.new}
        </Text>
        <Text
          containerProps={{
            style,
          }}
        >
          Hits: {row?.change?.hits_per_month?.old} -{" "}
          {row?.change?.hits_per_month?.new}
        </Text>
        <Text
          containerProps={{
            style,
          }}
        >
          Monthly Rate: {row?.change?.monthly_rate?.old} -{" "}
          {row?.change?.monthly_rate?.new}
        </Text>
      </td>
    );
  }

  // Effective Date
  else if (el === "effective_date") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        {moment(row?.effective_date).format("DD, MMMM YYYY")}
      </td>
    );
  }

  // Timestamp
  else if (el === "timestamp") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        {moment(row?.effective_date).format("DD, MMMM YYYY")}
      </td>
    );
  }

  // Default
  else {
    return <td>{el !== undefined && row?.[el] ? row?.[el] : "-"}</td>;
  }
};

export default RenderCellsUi;
