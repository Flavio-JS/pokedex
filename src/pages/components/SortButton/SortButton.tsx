import { useHomePage } from "@/pages/useHomePage";
import { Icon } from "../Icon/Icon";
import { sortButtonStyles } from "./SortButton.styles";
import { useSortButton } from "./useSortButton";

export const SortButton = () => {
  const { handleClick } = useSortButton();
  const { sortByNumberOrName } = useHomePage();

  const styles = sortButtonStyles({ sort: sortByNumberOrName });

  return (
    <button className={styles.SortButtonWrapper} onClick={() => handleClick()}>
      <Icon
        iconName={
          sortByNumberOrName === "number"
            ? "SortByNumberIcon"
            : "SortByNameIcon"
        }
      />
    </button>
  );
};
