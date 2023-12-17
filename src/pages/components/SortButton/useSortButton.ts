import { useHomePage } from "@/pages/useHomePage";
import { useRouter } from "../../../../node_modules/next/router";

export const useSortButton = () => {
  const router = useRouter();

  const { sortByNumberOrName } = useHomePage();

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

  return {
    handleClick,
  };
};
