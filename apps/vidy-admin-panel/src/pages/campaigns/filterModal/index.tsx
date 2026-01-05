import { Dropdown, Input, Modal } from "@repo/UI";
import { CAMPAIGN_USERS } from "@repo/utilities";
import { useTranslation } from "react-i18next";
import classes from "./style.module.css";

const FilterModal = ({
  onClose,
  isOpen,
}: {
  onClose: (e: any) => void;
  isOpen: boolean;
}) => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.CAMPAIGNS";

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      title={t(`${translationKey}.filters`)}
      primaryButtonText={t(`${translationKey}.apply`)}
      secondaryButtonText={t(`${translationKey}.cancel`)}
      secondaryButtonProps={{
        onClick: onClose,
      }}
      primaryButtonProps={{
        onClick: onClose,
      }}
    >
      <div className={classes.inputBox}>
        <div className={classes.inputGroup}>
          <Dropdown
            label={t(`${translationKey}.by_account`)}
            displayKey="account_name"
            valueKey="account_id"
            data={CAMPAIGN_USERS}
            setSelectedValue={(value) => console.log(value)}
          />
          <Dropdown
            label={t(`${translationKey}.by_plan`)}
            displayKey="account_name"
            valueKey="account_id"
            data={CAMPAIGN_USERS}
            setSelectedValue={(value) => console.log(value)}
          />
        </div>
        <Input
          label={t(`${translationKey}.calender_date`)}
          inputProps={{
            required: true,
            type: "date",
          }}
        />
        {/* <Input
          label={t(`${translationKey}.hight_hits`)}
          inputProps={{
            required: true,
            placeholder: t(`${translationKey}.enter_hight_hits`),
          }}
        />
        <Input
          label={t(`${translationKey}.storage_heavy_campaigns`)}
          inputProps={{
            required: true,
            placeholder: t(`${translationKey}.enter_storage_in_numbers`),
          }}
        /> */}
      </div>
    </Modal>
  );
};

export default FilterModal;
