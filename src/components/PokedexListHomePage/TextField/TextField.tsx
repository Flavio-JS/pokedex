import { Icon } from "../../Icon/Icon";
import { TextFieldStyles } from "./TextField.styles";
import { useTextField } from "../../../hooks/TextField/useTextField";

export const TextField = () => {
  const styles = TextFieldStyles();
  const { searchTerm, handleInputChange, handleClick } = useTextField();

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

      <button
        type="button"
        onClick={() => handleClick()}
        aria-label="Remover filtro"
      >
        <Icon iconName="XIcon" />
      </button>
    </div>
  );
};
