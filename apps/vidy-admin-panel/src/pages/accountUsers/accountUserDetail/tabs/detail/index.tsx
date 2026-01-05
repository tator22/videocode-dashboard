import { InfoWrapper } from "@/components/InfoWrapper";
import { InfoCard, Separator } from "@repo/UI";
import { CONSTANTS, getUsageState, CAMPAIGN_USERS } from "@repo/utilities";
import moment from "moment";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

const Details = () => {
  // Hooks
  const { t } = useTranslation();
  const { id } = useParams();

  const data = CAMPAIGN_USERS[0];

  // States
  const [userData, setUserData] = useState(data);

  // Variables
  const translationKey = "PAGES.ACCOUNT_USERS.DETAIL";
  const hitUsageState = getUsageState(
    userData.hits_this_month,
    userData.total_limit
  );
  const storageUsageState = getUsageState(userData.storage_used, 15);

  // Effects
  useEffect(() => {
    if (id) {
      CAMPAIGN_USERS.forEach((item) => {
        if (item.id === Number(id)) {
          setUserData(item);
        }
      });
    }
  }, [id]);

  return (
    <>
      <InfoWrapper
        title={t(`${translationKey}.contracts`)}
        style={{
          paddingTop: "0rem",
        }}
      >
        <InfoCard
          title={t(`${translationKey}.account`)}
          value={userData.account_name}
        />
        <InfoCard
          title={t(`${translationKey}.contract_name`)}
          value="AlphaCorp - 15GB/10M"
        />
        <InfoCard
          title={t(`${translationKey}.monthly_rate`)}
          value={`${CONSTANTS.CURRENCY_SYMBOL}${userData.mrr}`}
        />
        <InfoCard
          title={t(`${translationKey}.campaign_limit`)}
          value={`${userData.total_campaigns}`}
        />
        <InfoCard
          title={t(`${translationKey}.share_storage_limit`)}
          value={`${userData.total_campaigns}`}
        />
        <InfoCard
          title={t(`${translationKey}.hits`)}
          value={String(userData.total_limit)}
        />
        <InfoCard title={t(`${translationKey}.branding`)} value={"On"} />
        <InfoCard
          title={t(`${translationKey}.effective_date`)}
          value={moment().format("DD, MMMM YYYY")}
        />
      </InfoWrapper>

      <Separator />

      <InfoWrapper title={t(`${translationKey}.stripe_subscription`)}>
        <InfoCard
          title={t(`${translationKey}.stripe_customer_id`)}
          value="S23BDT53"
        />
        <InfoCard
          title={t(`${translationKey}.stripe_subscription_id`)}
          value={userData.account_id}
        />
        <InfoCard
          title={t(`${translationKey}.subscription_status`)}
          value={userData.status}
        />
        <InfoCard
          title={t(`${translationKey}.base_price`)}
          value={`${CONSTANTS.CURRENCY_SYMBOL}${userData.mrr}`}
        />
        <InfoCard title={t(`${translationKey}.add_ons`)} value={"-"} />
        <InfoCard
          title={t(`${translationKey}.next_invoice_date`)}
          value={moment().add(1, "month").format("DD, MMMM YYYY")}
        />
        <InfoCard
          title={t(`${translationKey}.last_invoice_paid`)}
          value={moment().format("DD, MMMM YYYY")}
        />
      </InfoWrapper>

      <Separator />

      <InfoWrapper title={t(`${translationKey}.usage_and_overage_monitor`)}>
        <InfoCard
          title={t(`${translationKey}.campaign_used`)}
          value={`${userData.total_campaigns} / 100`}
        />
        <InfoCard
          title={t(`${translationKey}.storage_used`)}
          style={{
            backgroundColor: storageUsageState.backgroundColor,
            color: storageUsageState.color,
          }}
          value={`${userData.storage_used}GB / 15GB`}
        />
        <InfoCard
          title={t(`${translationKey}.hits_used`)}
          style={{
            backgroundColor: hitUsageState.backgroundColor,
            color: hitUsageState.color,
          }}
          value={`${userData.hits_this_month} / ${userData.total_limit}`}
        />
        <InfoCard
          title={t(`${translationKey}.projected_hits_by_month`)}
          value={`${userData.hits_this_month}`}
        />
        <InfoCard
          title={t(`${translationKey}.overage_state`)}
          value={String(userData.total_campaigns + 100)}
        />
      </InfoWrapper>
    </>
  );
};

export default Details;
