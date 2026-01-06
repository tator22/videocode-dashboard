import Header from "@/components/Header";
import { Searchbar } from "@/layout/searchbar";
import { DataTable } from "@repo/UI";
import {
  CONSTANTS,
  generateRoutePath,
  CUSTOMER_USER_DATA,
} from "@repo/utilities";
import { FC, ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import AddNewAccount from "./addNewAccount";
import RenderCellsUi from "./renderCellUi";
import styles from "./style.module.css";
import { TableColumn } from "./tableColumn";

export const CustomerUsers: FC = () => {
  // Hooks
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Variables
  const showData = TableColumn.map((el) => el.id);
  const translationKey = "PAGES.CUSTOMER_USERS";

  // Local State
  const [enableAddAccountModal, setEnableAddAccountModal] = useState(false);

  // Functions
  const handleEnableAddCodeModal = () => {
    setEnableAddAccountModal((prev) => !prev);
  };

  const handleRowClick = () => {
    navigate(
      generateRoutePath({
        url: CONSTANTS.VIDY_ADMIN_PATHS.CUSTOMER_USERS_DETAIL,
        params: {
          id: String(1),
        },
      })
    );
  };

  return (
    <div className={styles.code}>
      <Header
        isButton
        heading={t(`${translationKey}.heading`)}
        buttonTitle={t(`${translationKey}.new_cta`)}
        onButtonClick={handleEnableAddCodeModal}
        rightChildren={
          <Searchbar
            inputProps={{
              placeholder: t(`${translationKey}.search`),
            }}
          />
        }
      />

      <DataTable
        headCells={TableColumn as any}
        rows={CUSTOMER_USER_DATA as []}
        onClickRow={handleRowClick}
        render={(row: any): ReactNode =>
          showData?.map((el, index) => (
            <RenderCellsUi key={`stripe-accounts-${index}`} row={row} el={el} />
          ))
        }
      />

      {/* Modal */}
      {enableAddAccountModal && (
        <AddNewAccount
          isOpen={enableAddAccountModal}
          onClose={handleEnableAddCodeModal}
        />
      )}
    </div>
  );
};
