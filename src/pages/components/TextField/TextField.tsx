import { Icon } from "../Icon/Icon";
import { TextFieldStyles } from "./TextField.styles";
import { useTextField } from "./useTextField";

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

      <button onClick={() => handleClick()}>
        <Icon iconName="XIcon" />
      </button>
    </div>
  );
};
