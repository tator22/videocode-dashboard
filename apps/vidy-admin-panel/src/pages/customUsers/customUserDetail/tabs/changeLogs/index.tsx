import { DataTable } from "@repo/UI";
import {
  CONSTANTS,
  generateRoutePath,
  PLAN_AND_BILLING_CHANGE_LOG_DATA,
} from "@repo/utilities";
import { FC, ReactNode } from "react";
import { useNavigate } from "react-router";
import RenderCellsUi from "./renderCellUi";
import styles from "./style.module.css";
import { TableColumn } from "./tableColumn";

export const ChangeLogs: FC = (): JSX.Element => {
  // Hooks
  const navigate = useNavigate();

  // Variables
  const showData = TableColumn.map((el) => el.id);

  const handleRowClick = () => {
    navigate(
      generateRoutePath({
        url: CONSTANTS.VIDY_ADMIN_PATHS.USERS_AND_ACCOUNTS_DETAIL,
        params: {
          id: String(1),
        },
      })
    );
  };

  return (
    <div className={styles.logChanges}>
      <DataTable
        headCells={TableColumn as any}
        rows={PLAN_AND_BILLING_CHANGE_LOG_DATA as []}
        onClickRow={handleRowClick}
        render={(row: any): ReactNode =>
          showData?.map((el, index) => (
            <RenderCellsUi key={`-${index}`} row={row} el={el} />
          ))
        }
      />
    </div>
  );
};
