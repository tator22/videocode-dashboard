import { InfoWrapper } from "@/components/InfoWrapper";
import { InfoCard } from "@repo/UI";
import { getUsageState, PLAN_USERS } from "@repo/utilities";
import moment from "moment";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

const Details = () => {
  // Hooks
  const { t } = useTranslation();
  const { id } = useParams();

  const data = PLAN_USERS[0];

  // States
  const [firstUser, setFirstUser] = useState(data);

  // Variables
  const translationKey = "PAGES.PLAN_USERS.DETAIL";
  // const hitUsageState = getUsageState(
  //   firstUser.hits_this_month,
  //   firstUser.total_limit
  // );
  const storageUsageState = getUsageState(firstUser.storage_used, 15);
  const isAccount = firstUser.type === "account";

  // Effects
  useEffect(() => {
    if (id) {
      PLAN_USERS.forEach((item) => {
        if (item.id === Number(id)) {
          setFirstUser(item);
        }
      });
    }
  }, [id]);

  return (
    <div>
      <InfoWrapper
        title={t(`${translationKey}.user_detail`)}
        style={{
          paddingTop: "0rem",
        }}
      >
        <InfoCard
          title={t(`${translationKey}.account_name`)}
          value={firstUser.account_name}
        />
        <InfoCard
          title={t(`${translationKey}.email`)}
          value={firstUser.email}
        />
        <InfoCard
          title={t(`${translationKey}.platform`)}
          value={firstUser.platforms.map((i) => i).join(", ")}
        />
        <InfoCard
          title={t(`${translationKey}.last_login_and_usage`)}
          value={moment().format("DD, MMMM YYYY")}
        />
        <InfoCard
          title={t(`${translationKey}.total_campaigns`)}
          value={
            isAccount
              ? `${firstUser.total_campaigns} / 100`
              : `${firstUser.total_campaigns}`
          }
        />
        <InfoCard
          title={t(`${translationKey}.storage_used`)}
          style={{
            backgroundColor: storageUsageState.backgroundColor,
            color: storageUsageState.color,
          }}
          value={
            isAccount
              ? `${firstUser.storage_used}GB / 15GB`
              : `${firstUser.storage_used}GB`
          }
        />
      </InfoWrapper>

      {/* <Separator />

      <InfoWrapper title={t(`${translationKey}.plan_details`)}>
        {isAccount && (
          <InfoCard
            title={t(`${translationKey}.mrr`)}
            value={`${CONSTANTS.CURRENCY_SYMBOL}${firstUser.mrr}`}
          />
        )}
        <InfoCard
          title={t(`${translationKey}.current_plan`)}
          value={firstUser.current_plan}
        />
        <InfoCard
          title={t(`${translationKey}.plan_start_date`)}
          value={moment().format("DD, MMMM YYYY")}
        />
        <InfoCard
          title={t(`${translationKey}.next_renewal_date`)}
          value={moment().format("DD, MMMM YYYY")}
        />
        
        <InfoCard
          title={t(`${translationKey}.hits_used_plan_limit`)}
          style={{
            backgroundColor: hitUsageState.backgroundColor,
            color: hitUsageState.color,
          }}
          value={
            isAccount
              ? `${firstUser.hits_this_month} / ${firstUser.total_limit}`
              : `${firstUser.hits_this_month}`
          }
        />
      </InfoWrapper> */}
    </div>
  );
};

export default Details;
