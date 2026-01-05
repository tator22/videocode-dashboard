import StatusChip from "@/components/StatusChip";
import TableAction, {
  TableActionMenuItemRender,
} from "@/components/TableAction";
import { ASSET_PATHS } from "@repo/assets";
import { Text } from "@repo/UI";
import { CONSTANTS, generateRoutePath } from "@repo/utilities";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();

  // Variables
  const style = { color: "inherit", fontSize: "inherit" };
  const translationKey = "PAGES.ACCOUNT_USERS";

  // Account
  if (el === "account") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        <Text
          containerProps={{
            style,
          }}
        >
          {t(`${translationKey}.name`)} {`${row?.account?.name}`}
        </Text>
        <Text
          containerProps={{
            style,
          }}
        >
          {t(`${translationKey}.email`)} {`${row?.account?.email}`}
        </Text>
      </td>
    );
  }

  // Limit Summary
  else if (el === "limit_summary") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        <Text
          containerProps={{
            style,
          }}
        >
          {t(`${translationKey}.campaigns`)}
          {`${row?.limits_summary?.campaigns}`}
        </Text>
        <Text
          containerProps={{
            style,
          }}
        >
          {t(`${translationKey}.storages`)}{" "}
          {`${row?.limits_summary?.storage_gb}`}
        </Text>
        <Text
          containerProps={{
            style,
          }}
        >
          {t(`${translationKey}.hits`)}{" "}
          {`${row?.limits_summary?.hits_per_month}`}
        </Text>
      </td>
    );
  }

  // Usage this period
  else if (el === "usage_this_period") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        <Text
          containerProps={{
            style,
          }}
        >
          {t(`${translationKey}.campaigns_used`)}{" "}
          {`${row?.usage_this_period?.campaigns_used}`}
        </Text>
        <Text
          containerProps={{
            style,
          }}
        >
          {t(`${translationKey}.storage_used`)}{" "}
          {`${row?.usage_this_period?.storage_used_gb}`}
        </Text>
        <Text
          containerProps={{
            style,
          }}
        >
          {t(`${translationKey}.hits_used`)}{" "}
          {`${row?.usage_this_period?.hits_used}`}
        </Text>
      </td>
    );
  }

  // Status
  else if (el === "status") {
    return (
      <td>
        <StatusChip status={row?.status?.replaceAll("_", " ")} />
      </td>
    );
  }

  // MRR
  else if (el === "mrr") {
    return <td>{`${CONSTANTS.CURRENCY_SYMBOL}${row?.mrr}`}</td>;
  }

  // Billing Source
  else if (el === "billing_source") {
    return (
      <td style={{ whiteSpace: "nowrap", textTransform: "capitalize" }}>
        {row?.billing_source}
      </td>
    );
  }

  // Payment Method
  else if (el === "payment_method") {
    return (
      <td style={{ whiteSpace: "nowrap", textTransform: "capitalize" }}>
        {row?.payment_method}
      </td>
    );
  }

  // Actions
  else if (el === "actions") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        <TableAction>
          <TableActionMenuItemRender
            icon={ASSET_PATHS.SVGS.DOCUMENT}
            name={t(`${translationKey}.details`)}
            onClick={() =>
              navigate(
                generateRoutePath({
                  url: CONSTANTS.VIDY_ADMIN_PATHS.ACCOUNT_USERS_DETAIL,
                  params: {
                    id: row?.account_id,
                  },
                })
              )
            }
          />
          <TableActionMenuItemRender
            icon={ASSET_PATHS.SVGS.VIEW_STRIPE}
            name={t(`${translationKey}.view_stripe`)}
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
