import Authentication from "@/pages/authentication/index.js";
import { CampaignDetail } from "@/pages/campaigns/campaignDetail/index.js";
import { Campaigns } from "@/pages/campaigns/index.js";
import { CampaignUserDetail } from "@/pages/campaignUsers/campaignUserDetail/index.js";
import { CampaignUsers } from "@/pages/campaignUsers/index.js";
import Dashboard from "@/pages/dashboard/index.js";
import { FlagsAndAbuse } from "@/pages/flagsAndAbuse/index.js";
import LandingScreen from "@/pages/landingScreen/index.js";
import { AccountUsers } from "@/pages/accountUsers/index.js";
import { PlansAndBillingDetail } from "@/pages/accountUsers/plansAndBillingDetail/index.js";
import { StorageAndAsset } from "@/pages/storageAndAsset/index.js";
import { Support } from "@/pages/support/index.js";
import { SystemSetting } from "@/pages/systemSetting/index.js";
import { UsageAndLimit } from "@/pages/usageAndLimits/index.js";
import { CONSTANTS } from "@repo/utilities";
import { lazy } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from "react-router";
import "./i18n.js";

const Error = lazy(() => import("./src/pages/error"));
const Layout = lazy(() => import("./src/layout"));

function ErrorBoundary() {
  const error = useRouteError();
  console.error("Route Error = ", error);
  return <Error />;
}

export const router = createBrowserRouter([
  {
    path: CONSTANTS.VIDY_ADMIN_PATHS.ROOT,
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: CONSTANTS.VIDY_ADMIN_PATHS.ROOT,
        element: <LandingScreen />,
      },
      {
        path: CONSTANTS.VIDY_ADMIN_PATHS.DASHBOARD,
        element: <Dashboard />,
      },
      // User and Accounts --
      {
        path: CONSTANTS.VIDY_ADMIN_PATHS.CAMPAIGN_USERS,
        element: <CampaignUsers />,
      },
      {
        path: CONSTANTS.VIDY_ADMIN_PATHS.CAMPAIGN_USERS_DETAIL,
        element: <CampaignUserDetail />,
      },
      {
        path: CONSTANTS.VIDY_ADMIN_PATHS.CAMPAIGNS,
        element: <Campaigns />,
      },
      {
        path: CONSTANTS.VIDY_ADMIN_PATHS.CAMPAIGN_DETAIL,
        element: <CampaignDetail />,
      },
      {
        path: CONSTANTS.VIDY_ADMIN_PATHS.USAGE_AND_LIMITS,
        element: <UsageAndLimit />,
      },
      {
        path: CONSTANTS.VIDY_ADMIN_PATHS.ACCOUNT_USERS,
        element: <AccountUsers />,
      },
      {
        path: CONSTANTS.VIDY_ADMIN_PATHS.ACCOUNT_USERS_DETAIL,
        element: <PlansAndBillingDetail />,
      },
      {
        path: CONSTANTS.VIDY_ADMIN_PATHS.STORAGE_AND_ASSETS,
        element: <StorageAndAsset />,
      },
      {
        path: CONSTANTS.VIDY_ADMIN_PATHS.FLAGS_AND_ABUSE,
        element: <FlagsAndAbuse />,
      },
      {
        path: CONSTANTS.VIDY_ADMIN_PATHS.SYSTEM_SETTINGS,
        element: <SystemSetting />,
      },
      {
        path: CONSTANTS.VIDY_ADMIN_PATHS.SUPPORT_TOOLS_OR_NOTES,
        element: <Support />,
      },
    ],
  },
  {
    path: CONSTANTS?.PATHS?.AUTHENTICATION,
    element: <Authentication />,
  },

  {
    path: "*",
    element: <Error />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
