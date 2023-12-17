import { useRouter } from "../../../../node_modules/next/router";
import { Icon } from "../Icon/Icon";
import { TextFieldStyles } from "./TextField.styles";

export const TextField = () => {
  const styles = TextFieldStyles();
  const router = useRouter();

  return (
    <div className={styles.TextFieldWrapper}>
      <Icon iconName="SearchIcon" />
      <input
        className={styles.TextFieldInput}
        type="text"
        name="text"
        placeholder="Search"
        onChange={(e) => {
          const searchTerm = e.target.value;

          void router.replace(
            {
              pathname: "",
              query: searchTerm
                ? {
                    filtro: searchTerm,
                  }
                : undefined,
            },
            undefined,
            {
              shallow: true,
            }
          );
        }}
      />
    </div>
  );
};
