import StatusChip from "@/components/StatusChip";
import TableAction, {
  TableActionMenuItemRender,
} from "@/components/TableAction";
import { ASSET_PATHS } from "@repo/assets";
import { Text } from "@repo/UI";
import moment from "moment";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TableColumnId } from "./tableColumn";

interface RenderCellsUiProps {
  row: Record<string, any>;
  el: TableColumnId;
  deleteButtonLoading?: boolean;
  refreshPage?: () => void;
}

const RenderCellsUi: FC<RenderCellsUiProps> = ({ row, el }) => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.SUPPORT";

  // Last Active At
  if (el === "created_at") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        {moment(row?.last_active_at).format("DD, MMMM YYYY")}
      </td>
    );
  }

  // Name
  if (el === "account_name") {
    return <td style={{ whiteSpace: "nowrap" }}>{row?.account_name}</td>;
  }

  // Name
  if (el === "message") {
    return (
      <td>
        <Text
          containerProps={{
            style: {
              color: "inherit",
              fontSize: "inherit",
            },
          }}
          maximumNumberOfLines={2}
        >
          {row?.message}
        </Text>
      </td>
    );
  }

  // Status
  else if (el === "status") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        <StatusChip status={row?.status} />
      </td>
    );
  } else if (el === "action") {
    return (
      <td>
        <TableAction>
          <TableActionMenuItemRender
            name={t(`${translationKey}.reply`)}
            icon={ASSET_PATHS.SVGS.REPLY}
          />
          <TableActionMenuItemRender
            name={t(`${translationKey}.change_status`)}
            icon={ASSET_PATHS.SVGS.CHANGE_STATUS}
          />
          <TableActionMenuItemRender
            name={t(`${translationKey}.close_ticket`)}
            icon={ASSET_PATHS.SVGS.CLOSED}
          />
        </TableAction>
      </td>
    );
  }

  // Default
  else {
    return <td>{el !== undefined && row?.[el] ? row?.[el] : "-"}</td>;
  }
};

export default RenderCellsUi;
