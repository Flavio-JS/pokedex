import { SortButton } from "../SortButton/SortButton";
import { TextField } from "../TextField/TextField";
import { pokedexListHeaderStyles } from "./PokedexListHeader.styles";

export const PokedexListHeader = () => {
  const styles = pokedexListHeaderStyles();
  return (
    <div className={styles.pokedexListHeaderWrapper}>
      <div className={styles.pokedexListHeaderFilterWrapper}>
        <TextField />
        <div className={styles.pokedexListHeaderSortWrapper}>
          Order by: <SortButton />
        </div>
      </div>
    </div>
  );
};
