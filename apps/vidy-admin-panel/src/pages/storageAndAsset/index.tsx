import Header from "@/components/Header";
import { Dropdown, RenderTab, renderTabProps } from "@repo/UI";
import { FC, Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { StorageByAccount } from "./tabs/storageByAccount";
import { StorageByCampaign } from "./tabs/storageByCampaign";
import { Searchbar } from "@/layout/searchbar";
import { CAMPAIGN_USERS } from "@repo/utilities";

export const StorageAndAsset: FC = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.STORAGE_AND_ASSETS";
  const tabs: renderTabProps[] = [
    {
      label: t(`${translationKey}.storage_by_account`),
      key: "storage_by_account",
    },
    {
      label: t(`${translationKey}.storage_by_campaign`),
      key: "storage_by_campaign",
    },
  ];

  //  Local State
  const [activeTab, setActiveTab] = useState({
    label: "",
    key: "storage_by_account",
  });

  // Functions
  const renderTabItem = () => {
    if (activeTab) {
      switch (activeTab.key) {
        case "storage_by_account":
          return <StorageByAccount />;
        case "storage_by_campaign":
          return <StorageByCampaign />;
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
      <Header
        heading={t(`${translationKey}.heading`)}
        rightChildren={
          <>
            {activeTab.key === "storage_by_account" ? (
              <Searchbar
                inputProps={{
                  placeholder: t(`${translationKey}.search`),
                }}
              />
            ) : (
              <Dropdown
                placeholder={t(`${translationKey}.select_account`)}
                data={CAMPAIGN_USERS}
                displayKey="account_name"
                setSelectedValue={(value) => console.log(value)}
                valueKey={"account_id"}
              />
            )}
          </>
        }
      />

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
