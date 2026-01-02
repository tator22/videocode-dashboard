import Header from "@/components/Header";
import { RenderTab, renderTabProps } from "@repo/UI";
import { FC, Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { CampaignGuidelines } from "./tabs/campaignGuidelines";
import { Plans } from "./tabs/plans";
import { PrivacyPolicy } from "./tabs/privacyPolicy";
import { TermsOfService } from "./tabs/termsOfService";
import { Webhook } from "./tabs/webhook";

export const SystemSetting: FC = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.SYSTEM_SETTING";
  const tabs: renderTabProps[] = [
    {
      label: t(`${translationKey}.plans`),
      key: "plans",
    },
    // {
    //   label: t(`${translationKey}.global_feature`),
    //   key: "global_feature",
    // },
    {
      label: t(`${translationKey}.webhook`),
      key: "webhook",
    },
    {
      label: t(`${translationKey}.terms_of_service`),
      key: "terms_of_service",
    },
    {
      label: t(`${translationKey}.privacy_policy`),
      key: "privacy_policy",
    },
    {
      label: t(`${translationKey}.campaign_guidelines`),
      key: "campaign_guidelines",
    },
  ];

  //  Local State
  const [activeTab, setActiveTab] = useState({
    label: "",
    key: "plans",
  });

  // Functions
  const renderTabItem = () => {
    if (activeTab) {
      switch (activeTab.key) {
        case "plans":
          return <Plans />;
        // case "global_feature":
        //   return <GlobalFeature />;
        case "webhook":
          return <Webhook />;
        case "terms_of_service":
          return <TermsOfService />;
        case "privacy_policy":
          return <PrivacyPolicy />;
        case "campaign_guidelines":
          return <CampaignGuidelines />;
        default:
          return <p>No component found</p>;
      }
    }
  };

  // const handleRowClick = () => {
  //   navigate(
  //     generateRoutePath({
  //       url: CONSTANTS.PATHS.LISTING_DETAIL,
  //       params: {
  //         id: String(1),
  //       },
  //     })
  //   );
  // };

  return (
    <div className={styles.code}>
      <Header heading={t(`${translationKey}.heading`)} />

      <div className={styles.addMedia}>
        <RenderTab
          tabs={tabs}
          activeTab={activeTab.key}
          onClick={setActiveTab}
        />

        <Suspense fallback="loading...">{renderTabItem()}</Suspense>
      </div>
    </div>
  );
};
