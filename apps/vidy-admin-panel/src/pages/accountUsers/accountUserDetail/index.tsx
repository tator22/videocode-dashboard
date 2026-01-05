import EditPlanModal from "@/components/EditPlanModal";
import Header from "@/components/Header";
import { Campaigns } from "@/pages/campaigns";
import { Button, RenderTab, renderTabProps } from "@repo/UI";
import { FC, Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { ChangeLogs } from "./tabs/changeLogs";
import Details from "./tabs/detail";

export const AccountUserDetail: FC = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.ACCOUNT_USERS.DETAIL";
  const tabs: renderTabProps[] = [
    {
      label: t(`${translationKey}.details`),
      key: "details",
    },
    {
      label: t(`${translationKey}.campaigns`),
      key: "campaigns",
    },
    {
      label: t(`${translationKey}.change_logs`),
      key: "change_logs",
    },
  ];

  //  Local State
  const [activeTab, setActiveTab] = useState({
    label: "",
    key: "details",
  });
  const [enablePlanEditModal, setEnablePlanEditModal] = useState(false);

  // Functions
  const renderTabItem = () => {
    if (activeTab) {
      switch (activeTab.key) {
        case "details":
          return <Details />;
        case "campaigns":
          return <Campaigns mode="detail" />;
        case "change_logs":
          return <ChangeLogs />;
        default:
          return <p>No component found</p>;
      }
    }
  };

  const handleEditPlan = () => {
    setEnablePlanEditModal((prev) => !prev);
  };

  return (
    <div className={styles.userAndAccountDetail}>
      <Header
        isBack
        heading={t(`${translationKey}.heading`)}
        rightChildren={
          <>
            <Button
              text={t(`${translationKey}.edit`)}
              size="medium"
              variant="secondary"
              buttonProps={{
                onClick: handleEditPlan,
              }}
            />
            <Button
              text={t(`${translationKey}.open_in_stripe`)}
              size="medium"
              variant="secondary"
            />
            <Button
              text={t(`${translationKey}.add_on`)}
              size="medium"
              variant="secondary"
            />
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

      {/* {enableAddNoteModal && (
        <AddNoteModal
          onClose={handleEnableAddNoteModal}
          isOpen={enableAddNoteModal}
        />
      )} */}

      {enablePlanEditModal && (
        <EditPlanModal
          onClose={handleEditPlan}
          isOpen={enablePlanEditModal}
          context="account_users"
        />
      )}
    </div>
  );
};
