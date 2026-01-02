import EditPlanModal from "@/components/EditPlanModal";
import { Button, Text } from "@repo/UI";
import { CONSTANTS, PRICING_PLANS } from "@repo/utilities";
import { FC, MouseEventHandler, useState } from "react";
import classes from "./style.module.css";

export const Plans: FC = () => {
  // States
  const [enableEditModal, setEnableEditModal] = useState(false);

  // Functions
  const handleEnableEditModal = () => {
    setEnableEditModal((prev) => !prev);
  };

  return (
    <div className={classes.plans}>
      <div className={classes.renderPlans}>
        {PRICING_PLANS.map((item, index) => (
          <PlanCard
            {...item}
            key={`plan-card-${index}`}
            onClick={handleEnableEditModal}
          />
        ))}
      </div>

      {enableEditModal ? (
        <EditPlanModal
          onClose={handleEnableEditModal}
          isOpen={enableEditModal}
        />
      ) : null}
    </div>
  );
};

export const PlanCard = ({
  name,
  price_per_month,
  description,
  onClick,
}: {
  name: string;
  price_per_month: number;
  description: string;
  onClick?: MouseEventHandler;
}) => {
  return (
    <div className={classes.planCard}>
      <div className={classes.nameAndEdit}>
        <Text tag="h6" maximumNumberOfLines={1}>
          {name}
        </Text>
        <Button
          size="small"
          variant="secondary"
          text="Edit"
          buttonProps={{
            onClick,
          }}
        />
      </div>

      <div className={classes.monthlyPrice}>
        <Text
          tag="h1"
          containerProps={{
            className: classes.monthly,
          }}
        >
          {`${CONSTANTS.CURRENCY_SYMBOL}${price_per_month}`}
        </Text>
        <Text tag="p">Per month</Text>
      </div>
      {/* 
      <div className={classes.yearlyPrice}>
        <Text
          tag="p"
          containerProps={{
            className: classes.yearly,
          }}
        >{`${price_per_year}/yr, billed annually`}</Text>
      </div> */}

      <div className={classes.yearlyPrice}>
        <Text
          tag="p"
          containerProps={{
            className: classes.yearly,
          }}
        >{`${15000} Hits/month`}</Text>
      </div>

      <Text
        tag="p"
        containerProps={{
          className: classes.description,
        }}
      >
        {description}
      </Text>
    </div>
  );
};
