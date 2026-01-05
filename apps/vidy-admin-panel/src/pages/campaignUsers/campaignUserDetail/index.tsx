import EditPlanModal from "@/components/EditPlanModal";
import Header from "@/components/Header";
import StatusChip from "@/components/StatusChip";
import { Button, RenderTab, renderTabProps, Separator } from "@repo/UI";
import { FC, Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import AddNoteModal from "../addNoteModal";
import styles from "./style.module.css";
import { ChangeLogs } from "./tabs/changeLogs";
import Details from "./tabs/detail";
import { Campaigns } from "@/pages/campaigns";

export const CampaignUserDetail: FC = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.CAMPAIGN_USERS.DETAIL";
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
  const [enableAddNoteModal, setEnableAddNoteModal] = useState(false);
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

  const handleEnableAddNoteModal = () => {
    setEnableAddNoteModal((prev) => !prev);
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
              text={t(`${translationKey}.switch_account`)}
              size="medium"
              variant="secondary"
              buttonProps={{
                onClick: handleEditPlan,
              }}
            />
            <Button
              text={t(`${translationKey}.add_note`)}
              size="medium"
              variant="secondary"
              buttonProps={{
                onClick: handleEnableAddNoteModal,
              }}
            />
            <Button
              text={t(`${translationKey}.suspended`)}
              size="medium"
              variant="secondary"
              buttonProps={{
                style: {
                  color: "rgb(var(--error))",
                  backgroundColor: "rgb(var(--error), 0.05)",
                },
              }}
            />
            <Separator direction="vertical" />
            <StatusChip status={"active"} />
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

      {enableAddNoteModal && (
        <AddNoteModal
          onClose={handleEnableAddNoteModal}
          isOpen={enableAddNoteModal}
        />
      )}

      {enablePlanEditModal && (
        <EditPlanModal onClose={handleEditPlan} isOpen={enablePlanEditModal} />
      )}
    </div>
  );
};
