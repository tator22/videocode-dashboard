import StatusChip from "@/components/StatusChip";
import TableAction, {
  TableActionMenuItemRender,
} from "@/components/TableAction";
import { ASSET_PATHS } from "@repo/assets";
import { Text } from "@repo/UI";
import { CONSTANTS, generateRoutePath, getUsageState } from "@repo/utilities";
import moment from "moment";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import classes from "./style.module.css";
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
  const translationKey = "PAGES.CUSTOM_USERS";
  const campaignsUsage = getUsageState(
    row?.usage_this_period?.campaigns_used,
    row?.limits_summary?.campaigns
  );
  const storageUsage = getUsageState(
    row?.usage_this_period?.storage_used_gb,
    row?.limits_summary?.storage_gb
  );
  const hitsUsage = getUsageState(
    row?.usage_this_period?.hits_used,
    row?.limits_summary?.hits_per_month
  );

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
  // else if (el === "limit_summary") {
  //   return (
  //     <td style={{ whiteSpace: "nowrap" }}>
  //       <Text
  //         containerProps={{
  //           style,
  //         }}
  //       >
  //         {t(`${translationKey}.campaigns`)}
  //         {`${row?.limits_summary?.campaigns}`}
  //       </Text>
  //       <Text
  //         containerProps={{
  //           style,
  //         }}
  //       >
  //         {t(`${translationKey}.storages`)}{" "}
  //         {`${row?.limits_summary?.storage_gb}`}
  //       </Text>
  //       <Text
  //         containerProps={{
  //           style,
  //         }}
  //       >
  //         {t(`${translationKey}.hits`)}{" "}
  //         {`${row?.limits_summary?.hits_per_month}`}
  //       </Text>
  //     </td>
  //   );
  // }
  else if (el === "limit_summary") {
    return (
      <td>
        <UsageBar label="Campaigns" percentage={campaignsUsage.percentage} />
        <UsageBar label="Storage" percentage={storageUsage.percentage} />
        <UsageBar label="Hits" percentage={hitsUsage.percentage} />
      </td>
    );
  }

  // Usage this period
  // else if (el === "usage_this_period") {
  //   return (
  //     <td style={{ whiteSpace: "nowrap" }}>
  //       <Text
  //         containerProps={{
  //           style,
  //         }}
  //       >
  //         {t(`${translationKey}.campaigns_used`)}{" "}
  //         {`${row?.usage_this_period?.campaigns_used}`}
  //       </Text>
  //       <Text
  //         containerProps={{
  //           style,
  //         }}
  //       >
  //         {t(`${translationKey}.storage_used`)}{" "}
  //         {`${row?.usage_this_period?.storage_used_gb}`}
  //       </Text>
  //       <Text
  //         containerProps={{
  //           style,
  //         }}
  //       >
  //         {t(`${translationKey}.hits_used`)}{" "}
  //         {`${row?.usage_this_period?.hits_used}`}
  //       </Text>
  //     </td>
  //   );
  // }

  // Status
  else if (el === "status") {
    return (
      <td>
        <div className={classes.statusCell}>
          <StatusChip status={row?.status} />
        </div>
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
  // else if (el === "payment_method") {
  //   return (
  //     <td style={{ whiteSpace: "nowrap", textTransform: "capitalize" }}>
  //       {row?.payment_method}
  //     </td>
  //   );
  // }

  // Payment Method
  else if (el === "renewal_date") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        {moment(row?.renewal_date).add(2, "months").format("YYYY-MM-DD")}
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
            name={t(`${translationKey}.view_account`)}
            onClick={() =>
              navigate(
                generateRoutePath({
                  url: CONSTANTS.VIDY_ADMIN_PATHS.CUSTOM_USERS_DETAIL,
                  params: {
                    id: row?.account_id,
                  },
                })
              )
            }
          />
          <TableActionMenuItemRender
            icon={ASSET_PATHS.SVGS.SYSTEM_SETTING_OUTLINE}
            name={t(`${translationKey}.adjust_limits`)}
          />
          <TableActionMenuItemRender
            icon={ASSET_PATHS.SVGS.MONEY}
            name={t(`${translationKey}.update_monthly_charge`)}
          />
          <TableActionMenuItemRender
            icon={ASSET_PATHS.SVGS.BILLING_OUTLINED}
            name={t(`${translationKey}.pause_billing`)}
          />
          <TableActionMenuItemRender
            icon={ASSET_PATHS.SVGS.CANCEL_ACCOUNT}
            name={t(`${translationKey}.cancel_account`)}
          />
          <TableActionMenuItemRender
            icon={ASSET_PATHS.SVGS.OPEN_LINK}
            name={t(`${translationKey}.open_in_stripe`)}
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

type UsageBarProps = {
  label: string;
  percentage: number;
};

const getBarClass = (percentage: number) => {
  if (percentage >= 90) return classes.critical;
  if (percentage >= 70) return classes.warning;
  return classes.success;
};

const UsageBar = ({ label, percentage }: UsageBarProps) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.label}>{label}</div>

      <div className={classes.row}>
        <div className={classes.bar}>
          <div
            className={`${classes.fill} ${getBarClass(percentage)}`}
            style={{ width: `${percentage}%` }}
          />
        </div>

        <span className={classes.percent}>{percentage}%</span>
      </div>
    </div>
  );
};
