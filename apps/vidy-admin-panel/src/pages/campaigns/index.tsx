import Header from "@/components/Header";
import { Button, DataTable } from "@repo/UI";
import { CAMPAIGNS, CONSTANTS, generateRoutePath } from "@repo/utilities";
import { FC, ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import FilterModal from "./filterModal";
import RenderCellsUi from "./renderCellUi";
import styles from "./style.module.css";
import { TableColumn } from "./tableColumn";

export const Campaigns: FC<{ mode?: "detail" }> = ({ mode }) => {
  // Hooks
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Variables
  const translationKey = "PAGES.CAMPAIGNS";
  const showData = TableColumn.map((el) => el.id);

  // Local State
  const [enableFilterModal, setEnableFilterModal] = useState(false);

  // Functions
  const handleEnableFilterModal = () => {
    setEnableFilterModal((prev) => !prev);
  };

  const handleRowClick = () => {
    navigate(
      generateRoutePath({
        url: CONSTANTS.VIDY_ADMIN_PATHS.CAMPAIGN_DETAIL,
        params: {
          id: String(1),
        },
      })
    );
  };

  return (
    <div className={styles.code}>
      {mode === "detail" ? null : (
        <Header
          heading={t(`${translationKey}.heading`)}
          rightChildren={
            <Button
              text={t(`${translationKey}.filter`)}
              size="medium"
              variant="secondary"
              buttonProps={{
                onClick: handleEnableFilterModal,
              }}
            />
          }
        />
      )}

      <DataTable
        headCells={TableColumn as any}
        rows={CAMPAIGNS as []}
        onClickRow={handleRowClick}
        render={(row: any): ReactNode =>
          showData?.map((el, index) => (
            <RenderCellsUi key={`campaign-${index}`} row={row} el={el} />
          ))
        }
      />

      {enableFilterModal ? (
        <FilterModal
          isOpen={enableFilterModal}
          onClose={handleEnableFilterModal}
        />
      ) : null}
    </div>
  );
};
