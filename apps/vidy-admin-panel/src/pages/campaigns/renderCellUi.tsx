import StatusChip from "@/components/StatusChip";
import moment from "moment";
import { FC } from "react";
import { TableColumnId } from "./tableColumn";
import TableAction, {
  TableActionMenuItemRender,
} from "@/components/TableAction";
import { ASSET_PATHS } from "@repo/assets";
import { useTranslation } from "react-i18next";
import { Text } from "@repo/UI";

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
  const translationKey = "PAGES.CAMPAIGNS";
  const style = {
    fontSize: "inherit",
    color: "inherit",
    whiteSpace: "nowrap",
  };

  // Table Columns
  if (el === "created_at") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        {moment(row?.created_at).format("DD, MMMM YYYY")}
      </td>
    );
  }

  // Last Active At
  else if (el === "campaign_name") {
    return <td style={{ whiteSpace: "nowrap" }}>{row?.campaign_name}</td>;
  }

  // Name
  else if (el === "account") {
    return (
      <td style={{ display: "flex", flexDirection: "column" }}>
        <Text
          containerProps={{
            style,
          }}
        >
          {row?.account}
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

  // Status
  else if (el === "status") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        <StatusChip status={row?.status} />
      </td>
    );
  }

  // Action
  else if (el === "action") {
    return (
      <td>
        <TableAction isDelete>
          <TableActionMenuItemRender
            icon={ASSET_PATHS.SVGS.PREVIEW}
            name={t(`${translationKey}.preview_campaign`)}
          />
          <TableActionMenuItemRender
            icon={ASSET_PATHS.SVGS.ARCHIVE}
            name={t(`${translationKey}.archive`)}
          />
          <TableActionMenuItemRender
            icon={ASSET_PATHS.SVGS.DELETE}
            name={t(`${translationKey}.soft_delete`)}
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
