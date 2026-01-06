import { ASSET_PATHS } from "@repo/assets";
import { CONSTANTS } from "@repo/utilities";

export const ADMIN_SIDEBAR_TABS = [
  {
    key: "dashboard",
    label: "dashboard",
    link: CONSTANTS.VIDY_ADMIN_PATHS.DASHBOARD,
    icon: ASSET_PATHS.SVGS.DASHBOARD_OUTLINE,
    active_icon: ASSET_PATHS.SVGS.DASHBOARD_FILLED,
  },
  {
    key: "plan_users",
    label: "Plan Users",
    link: CONSTANTS.VIDY_ADMIN_PATHS.PLAN_USERS,
    icon: ASSET_PATHS.SVGS.PLAN_USER_OUTLINE,
    active_icon: ASSET_PATHS.SVGS.PLAN_USER_FILLED,
  },
  {
    key: "account_users",
    label: "Account Users",
    link: CONSTANTS.VIDY_ADMIN_PATHS.ACCOUNT_USERS,
    icon: ASSET_PATHS.SVGS.USERS_AND_ACCOUNTS_OUTLINE,
    active_icon: ASSET_PATHS.SVGS.USERS_AND_ACCOUNTS_FILLED,
  },
  {
    key: "campaigns",
    label: "Campaigns",
    link: CONSTANTS.VIDY_ADMIN_PATHS.CAMPAIGNS,
    icon: ASSET_PATHS.SVGS.CAMPAIGNS_OUTLINE,
    active_icon: ASSET_PATHS.SVGS.CAMPAIGNS_FILLED,
  },
  {
    key: "usage_and_limits",
    label: "Usage & Limits",
    link: CONSTANTS.VIDY_ADMIN_PATHS.USAGE_AND_LIMITS,
    icon: ASSET_PATHS.SVGS.USAGE_AND_LIMIT_OUTLINE,
    active_icon: ASSET_PATHS.SVGS.USAGE_AND_LIMIT_FILLED,
  },
  {
    key: "storage_and_assets",
    label: "Storage & Assets",
    link: CONSTANTS.VIDY_ADMIN_PATHS.STORAGE_AND_ASSETS,
    icon: ASSET_PATHS.SVGS.STORAGE_AND_ASSET_OUTLINE,
    active_icon: ASSET_PATHS.SVGS.STORAGE_AND_ASSET_FILLED,
  },
  // {
  //   key: "plans_and_billing",
  //   label: "Plans & Billing",
  //   link: CONSTANTS.VIDY_ADMIN_PATHS.ACCOUNT_USERS,
  //   icon: ASSET_PATHS.SVGS.PLANS_AND_BILLING_OUTLINE,
  //   active_icon: ASSET_PATHS.SVGS.PLANS_AND_BILLING_FILLED,
  // },
  {
    key: "flags_and_abuse",
    label: "Flags & Abuse",
    link: CONSTANTS.VIDY_ADMIN_PATHS.FLAGS_AND_ABUSE,
    icon: ASSET_PATHS.SVGS.FLAGS_AND_ABUSE_OUTLINE,
    active_icon: ASSET_PATHS.SVGS.FLAGS_AND_ABUSE_FILLED,
  },
  {
    key: "system_settings",
    label: "System Settings",
    link: CONSTANTS.VIDY_ADMIN_PATHS.SYSTEM_SETTINGS,
    icon: ASSET_PATHS.SVGS.SYSTEM_SETTING_OUTLINE,
    active_icon: ASSET_PATHS.SVGS.SYSTEM_SETTING_FILLED,
  },
  {
    key: "support-tools-or-notes",
    label: "Support",
    link: CONSTANTS.VIDY_ADMIN_PATHS.SUPPORT_TOOLS_OR_NOTES,
    icon: ASSET_PATHS.SVGS.SUPPORT_ICON_OUTLINE,
    active_icon: ASSET_PATHS.SVGS.SUPPORT_ICON_FILLED,
  },
];
