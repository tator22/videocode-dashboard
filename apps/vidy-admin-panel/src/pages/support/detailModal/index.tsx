import StatusChip from "@/components/StatusChip";
import { Modal, Text } from "@repo/UI";
import { SUPPORT_NOTES_DATA } from "@repo/utilities";
import moment from "moment";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import classes from "./style.module.css";

const SupportDetailModal = ({
  isOpen,
  onClose,
  id,
}: {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}) => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.SUPPORT.DETAIL";

  // States
  const [supportData, setSupportData] = useState(SUPPORT_NOTES_DATA[0]);

  // Effects
  useEffect(() => {
    if (id) {
      SUPPORT_NOTES_DATA.forEach((element) => {
        if (element.id === id) setSupportData(element);
      });
    }

    return () => {
      setSupportData(SUPPORT_NOTES_DATA[0]);
    };
  }, [id]);

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      title={t(`${translationKey}.heading`)}
    >
      <div className={classes.header}>
        <div className={classes.nameAndTime}>
          <Text
            containerProps={{
              className: classes.name,
            }}
          >
            {supportData.account_name}
          </Text>
          <Text>{moment(supportData.created_at).format("DD, MMMM YYYY")}</Text>
        </div>

        <StatusChip status={supportData.status} />
      </div>

      <Text
        tag="p"
        containerProps={{
          className: classes.message,
        }}
      >
        {supportData.message}
      </Text>
    </Modal>
  );
};

export default SupportDetailModal;
