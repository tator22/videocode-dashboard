import { Button, Modal, Textarea } from "@repo/UI";
import classes from "./style.module.css";
import { useTranslation } from "react-i18next";

const AddNoteModal = ({
  onClose,
  isOpen,
}: {
  onClose: (e: any) => void;
  isOpen: boolean;
}) => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.PLAN_USERS.ADD_NOTES_MODAL";

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      title={t(`${translationKey}.admin_note`)}
    >
      <form className={classes.form}>
        <Textarea
          rows={5}
          label={t(`${translationKey}.add_note`)}
          placeholder={t(`${translationKey}.placeholder`)}
        />
        <Button
          text={t(`${translationKey}.submit`)}
          size="medium"
          buttonProps={{
            style: {
              alignSelf: "flex-end",
            },
          }}
        />
      </form>
    </Modal>
  );
};

export default AddNoteModal;
