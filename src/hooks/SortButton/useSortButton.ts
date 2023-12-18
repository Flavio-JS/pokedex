import { useHomePage } from "@/hooks/Home/useHomePage";
import { useRouter } from "next/router";

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
