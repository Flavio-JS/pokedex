import { ChangeEvent, useState } from "react";
import { useRouter } from "../../../../node_modules/next/router";

export const useTextField = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = () => {
    const currentQuery = router.query || {};
    const { filter, ...rest } = currentQuery;
  
    setSearchTerm("");
    void router.replace(
      {
        pathname: router.pathname,
        query: {
          ...rest,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;

    const currentQuery = router.query || {};

    void router.replace(
      {
        pathname: router.pathname,
        query: {
          ...currentQuery,
          filter: newSearchTerm,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );

    setSearchTerm(newSearchTerm);
  };
  return {
    searchTerm,
    handleInputChange,
    handleClick,
  };
};
