import { Button, Input, Modal, Switch } from "@repo/UI";
import { useTranslation } from "react-i18next";
import classes from "./style.module.css";

const EditPlanModal = ({
  onClose,
  isOpen,
}: {
  onClose: (e?: any) => void;
  isOpen: boolean;
}) => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.SYSTEM_SETTING";

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      title={t(`${translationKey}.edit_plan`)}
      hideHeaderSeparator
    >
      <form className={classes.editPlanForm}>
        <div className={classes.inputGroup}>
          <Input
            label={t(`${translationKey}.hit_limit`)}
            inputProps={{
              required: true,
              placeholder: t(`${translationKey}.enter_hit_limit`),
            }}
          />
          <Input
            label={t(`${translationKey}.storage`)}
            inputProps={{
              required: true,
              placeholder: t(`${translationKey}.enter_storage`),
            }}
          />
          {/* <Input
            label={t(`${translationKey}.campaign_limit`)}
            inputProps={{
              required: true,
              placeholder: t(`${translationKey}.enter_campaign_limit`),
            }}
          /> */}
          <Switch
            label={t(`${translationKey}.branding`)}
            inputProps={{
              required: true,
            }}
          />
        </div>

        <div className={classes.buttonGroup}>
          <Button
            text={t(`${translationKey}.cancel`)}
            size="medium"
            variant="secondary"
            buttonProps={{
              type: "button",
              onClick: onClose,
            }}
          />
          <Button text={t(`${translationKey}.submit`)} size="medium" />
        </div>
      </form>
    </Modal>
  );
};

export default EditPlanModal;
