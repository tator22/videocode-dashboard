import Header from "@/components/Header";
import { DataTable } from "@repo/UI";
import {
  CONSTANTS,
  generateRoutePath,
  STRIPE_ACCOUNTS_DATA,
} from "@repo/utilities";
import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import RenderCellsUi from "./renderCellUi";
import styles from "./style.module.css";
import { TableColumn } from "./tableColumn";

export const AccountUsers: FC = () => {
  // Hooks
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Variables
  const showData = TableColumn.map((el) => el.id);
  const translationKey = "PAGES.ACCOUNT_USERS";

  const handleRowClick = () => {
    navigate(
      generateRoutePath({
        url: CONSTANTS.VIDY_ADMIN_PATHS.ACCOUNT_USERS_DETAIL,
        params: {
          id: String(1),
        },
      })
    );
  };

  return (
    <div className={styles.code}>
      <Header heading={t(`${translationKey}.heading`)} />

      <DataTable
        headCells={TableColumn as any}
        rows={STRIPE_ACCOUNTS_DATA as []}
        onClickRow={handleRowClick}
        render={(row: any): ReactNode =>
          showData?.map((el, index) => (
            <RenderCellsUi key={`stripe-accounts-${index}`} row={row} el={el} />
          ))
        }
      />

      {/* Modal */}
      {/* {enableAddCodeModal && (
        <AddNewCode
          isOpen={enableAddCodeModal}
          onClose={handleEnableAddCodeModal}
        />
      )} */}
    </div>
  );
};
