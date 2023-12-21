import { useHomePage } from "@/hooks/Home/useHomePage";
import { Icon } from "../../Icon/Icon";
import { sortButtonStyles } from "./SortButton.styles";
import { useSortButton } from "../../../hooks/SortButton/useSortButton";

export const SortButton = () => {
  const { handleClick } = useSortButton();
  const { sortByNumberOrName } = useHomePage();

  const styles = sortButtonStyles({ sort: sortByNumberOrName });

  return (
    <button
      type="button"
      className={styles.SortButtonWrapper}
      onClick={() => handleClick()}
      aria-label={
        sortByNumberOrName === "number"
          ? "Ordenar pelo Número"
          : "Ordenar pelo Nome"
      }
    >
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
