import ListItem from "./ListItem";
import { useContext } from "react";
import SearchContext from "../../store/SearchContext";
export default function RenderingData({ arr }) {
  const searchCtx = useContext(SearchContext);
  return (
    <>
      {arr.slice(0, 20).map((listItem, i) => {
        const likedCrypto = searchCtx.favorites.find(
          (el) => el.symbol === listItem.symbol
        );
        if (likedCrypto) {
          return (
            <ListItem
              key={listItem.id}
              data={listItem}
              i={i + 1}
              favoriteBtn={true}
              liked={true}
            />
          );
        }
        return (
          <ListItem
            key={listItem.id}
            data={listItem}
            i={i + 1}
            favoriteBtn={true}
          />
        );
      })}
    </>
  );
}
