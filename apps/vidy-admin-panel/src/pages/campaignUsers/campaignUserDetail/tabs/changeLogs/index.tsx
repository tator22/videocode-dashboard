import { DataTable } from "@repo/UI";
import { CHANGE_LOGS, CONSTANTS, generateRoutePath } from "@repo/utilities";
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
        rows={CHANGE_LOGS as []}
        onClickRow={handleRowClick}
        render={(row: any): ReactNode =>
          showData?.map((el, index) => (
            <RenderCellsUi key={`log-change-${index}`} row={row} el={el} />
          ))
        }
      />
    </div>
  );
};
