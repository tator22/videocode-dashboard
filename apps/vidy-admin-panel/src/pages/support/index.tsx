import Header from "@/components/Header";
import { DataTable } from "@repo/UI";
import { SUPPORT_NOTES_DATA } from "@repo/utilities";
import { FC, ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import RenderCellsUi from "./renderCellUi";
import styles from "./style.module.css";
import { TableColumn } from "./tableColumn";
import SupportDetailModal from "./detailModal";

export const Support: FC = (): JSX.Element => {
  // Hooks
  const { t } = useTranslation();
  // const navigate = useNavigate();

  // Variables
  const translationKey = "PAGES.SUPPORT";
  const showData = TableColumn.map((el) => el.id);

  // States
  const [enableDetailModal, setEnableDetailModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  // Functions
  const handleDetailModal = (rowId?: string) => {
    setEnableDetailModal((prev) => !prev);
    setSelectedId(rowId as string);
  };

  return (
    <div className={styles.code}>
      <Header heading={t(`${translationKey}.heading`)} />

      <DataTable
        headCells={TableColumn as any}
        rows={SUPPORT_NOTES_DATA as []}
        onClickRow={handleDetailModal}
        render={(row: any): ReactNode =>
          showData?.map((el, index) => (
            <RenderCellsUi key={`support-${index}`} row={row} el={el} />
          ))
        }
      />

      {enableDetailModal && (
        <SupportDetailModal
          isOpen={enableDetailModal}
          onClose={handleDetailModal}
          id={selectedId}
        />
      )}
    </div>
  );
};
