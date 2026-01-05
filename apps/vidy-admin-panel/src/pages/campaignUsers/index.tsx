import Header from "@/components/Header";
import { Searchbar } from "@/layout/searchbar";
import { DataTable } from "@repo/UI";
import { CAMPAIGN_USERS, CONSTANTS, generateRoutePath } from "@repo/utilities";
import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import RenderCellsUi from "./renderCellUi";
import styles from "./style.module.css";
import { TableColumn } from "./tableColumn";

export const CampaignUsers: FC = (): JSX.Element => {
  // Hooks
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Variables
  const translationKey = "PAGES.CAMPAIGN_USERS";
  const showData = TableColumn.map((el) => el.id);

  // Local State
  // const [enableAddAccountModal, setEnableAddAccountModal] = useState(false);
  // const [enableFilterModal, setEnableFilterModal] = useState(false);

  // Functions
  // const handleEnableAddCodeModal = () => {
  //   setEnableAddAccountModal((prev) => !prev);
  // };

  // const handleEnableFilterModal = () => {
  //   setEnableFilterModal((prev) => !prev);
  // };

  const handleRowClick = (rowId: string) => {
    navigate(
      generateRoutePath({
        url: CONSTANTS.VIDY_ADMIN_PATHS.CAMPAIGN_USERS_DETAIL,
        params: {
          id: rowId,
        },
      })
    );
  };

  return (
    <div className={styles.code}>
      <Header
        // isButton
        heading={t(`${translationKey}.heading`)}
        // buttonTitle={t(`${translationKey}.new_cta`)}
        // onButtonClick={handleEnableAddCodeModal}
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
        rows={CAMPAIGN_USERS as []}
        onClickRow={handleRowClick}
        render={(row: any): ReactNode =>
          showData?.map((el, index) => (
            <RenderCellsUi
              key={`user-and-account-${index}`}
              row={row}
              el={el}
            />
          ))
        }
      />

      {/* Modal */}
      {/* {enableAddAccountModal && (
        <AddNewAccount
          isOpen={enableAddAccountModal}
          onClose={handleEnableAddCodeModal}
        />
      )} */}
      {/* {enableFilterModal && (
        <FilterModal
          isOpen={enableFilterModal}
          onClose={handleEnableFilterModal}
        />
      )} */}
    </div>
  );
};
