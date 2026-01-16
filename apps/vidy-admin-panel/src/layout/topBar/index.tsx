import {
  resetSideBarMode,
  toggleSideBarMode,
} from "@/redux/slice/otherSlices/sideBarModeSlice";
import { useAppDispatch } from "@/redux/store";
import { ASSET_PATHS } from "@repo/assets";
import { ProfilePhoto } from "@repo/UI";
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect } from "react";
import styles from "./style.module.css";

const TopBar = () => {
  // Hooks
  // const { t } = useTranslation("layout");
  const dispatch = useAppDispatch();
  const { width } = useWindowSize();

  // Variables
  // const forSearchBar = width && width <= 1250;
  const isMobile = width && width <= 768;

  // Effects
  // Effects
  useEffect(() => {
    if (isMobile) {
      dispatch(resetSideBarMode());
    } else {
      // dispatch(toggleSideBarMode());
    }
  }, [isMobile]);

  return (
    <div className={styles.topBarContainer}>
      <div className={styles.iconContainer}>
        <img
          src={ASSET_PATHS.SVGS.MENU}
          alt="menu icon"
          className={styles.menuIcon}
          onClick={() => dispatch(toggleSideBarMode())}
        />
      </div>

      {/* <Searchbar
        containerClassName={styles.searchbarClassName}
        inputProps={{
          placeholder: t("search"),
        }}
      /> */}

      <div className={styles.storageAndOtherIcons}>
        {/* <div className={styles.storageCounter}>
          <div className={styles.storageCount}>
            <span className={styles.storage}>{t("storage")}</span>
            <span className={styles.storage}>2.3GB/5GB</span>
          </div>
          <div className={styles.storageSlider} />
        </div>

        {forSearchBar ? (
          <img
            src={ASSET_PATHS.SVGS.SEARCH}
            alt="notification icon"
            className={styles.notification}
          />
        ) : null}
        <img
          src={ASSET_PATHS.SVGS.NOTIFICATION}
          alt="notification icon"
          className={styles.notification}
        /> */}

        <ProfilePhoto
          size={"4rem"}
          // onClick={() => navigate(CONSTANTS.PATHS.ACCOUNT)}
        />
      </div>
    </div>
  );
};

export default TopBar;
