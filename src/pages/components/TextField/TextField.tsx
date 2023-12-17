import { ChangeEvent, useState } from "react";
import { useRouter } from "../../../../node_modules/next/router";
import { Icon } from "../Icon/Icon";
import { TextFieldStyles } from "./TextField.styles";

export const TextField = () => {
  const styles = TextFieldStyles();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  const filterByNumberOrName =
    router.query.filterBy === undefined || router.query.filterBy === "name"
      ? "name"
      : "number";

  const handleClick = () => {
    const currentQuery = router.query || {};
    const updatedFilter = filterByNumberOrName === "name" ? "number" : "name";

    void router.replace(
      {
        pathname: router.pathname,
        query: {
          ...currentQuery,
          filterBy: updatedFilter,
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

  return (
    <div className={styles.TextFieldWrapper}>
      <Icon iconName="SearchIcon" />
      <input
        className={styles.TextFieldInput}
        type="text"
        name="text"
        value={searchTerm}
        placeholder="Search"
        onChange={(e) => handleInputChange(e)}
      />

      <button onClick={() => handleClick()}>
        <Icon
          iconName={
            filterByNumberOrName === "number"
              ? "SortByNumberIcon"
              : "SortByNameIcon"
          }
        />
      </button>
    </div>
  );
};
