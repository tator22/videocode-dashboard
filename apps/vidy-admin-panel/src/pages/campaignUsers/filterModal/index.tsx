import { Dropdown, Modal } from "@repo/UI";
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
  const translationKey = "PAGES.CAMPAIGN_USERS";
  const typeData = [
    {
      value: "account",
      display: "Account",
    },
    {
      value: "campaign",
      display: "Campaign",
    },
  ];

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
        <Dropdown
          data={typeData}
          label={t(`${translationKey}.type`)}
          displayKey="display"
          valueKey="value"
          setSelectedValue={(value) => console.log(value)}
        />
      </div>
    </Modal>
  );
};

export default FilterModal;
