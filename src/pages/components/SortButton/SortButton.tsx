import { useRouter } from "../../../../node_modules/next/router";
import { Icon } from "../Icon/Icon";
import { sortButtonStyles } from "./SortButton.styles";

export const SortButton = () => {
  const router = useRouter();

  const sortByNumberOrName =
    router.query.sort === undefined || router.query.sort === "number"
      ? "number"
      : "name";

  const styles = sortButtonStyles({ sort: sortByNumberOrName });

  const handleClick = () => {
    const currentQuery = router.query || {};
    const updatedSort = sortByNumberOrName === "number" ? "name" : "number";

    void router.replace(
      {
        pathname: router.pathname,
        query: {
          ...currentQuery,
          sort: updatedSort,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  };

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
